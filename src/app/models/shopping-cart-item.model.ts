import { Product } from './product.model';

export class ShoppingCartItem{

    

constructor(public product:Product, public quantity:number){


}

    get totalPrice(){

        return this.product.productDetails.price * this.quantity; 
    }

}