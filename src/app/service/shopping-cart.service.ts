import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from '../models/product.model';
import { take, map } from 'rxjs/operators';
import { ShoppingCart } from '../models/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }


  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

   async getCart() {

    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId)
                  .snapshotChanges()
                  .pipe( map(  x => {
                    
                    let temp:any = x.payload.val();
                    return new ShoppingCart(temp.items);
                  
                  
                  }));
  
  }

 
 
  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;

  }

  private getItem(cartId:string, productId:string){

    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);

  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId,product.key);

    item$.snapshotChanges().pipe(take(1)).subscribe(item => {

      let temp: any = item.payload;

      if ((temp).exists())
        item$.update({ quantity: temp.val().quantity + 1 });

      else
        item$.set({ product: product, quantity: 1 });

    });

  }



 async removeFromCart(product:Product){

  let cartId = await this.getOrCreateCartId();
  let item$ = this.getItem(cartId,product.key);

  item$.snapshotChanges().pipe(take(1)).subscribe(item => {

    let temp: any = item.payload;

    if ((temp).exists())
      item$.update({ quantity: temp.val().quantity - 1 });

});


  }



  async clearCart(){

    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/'+cartId+'/items').remove();
  }

}
