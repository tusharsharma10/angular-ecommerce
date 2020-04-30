import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { ProductDetails } from '../models/product-details.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit  {

  @Input('product') p:Product = new Product();
  @Input('show-actions') showActions = true; 
  @Input('shopping-cart') shoppingCart;
  
  constructor(private cartService:ShoppingCartService) { }
  
  ngOnInit(): void {
    
  

  }

  addToCart(product){
    this.cartService.addToCart(product);
  }

  getQuantity(){

    if(!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.p.key];
    return item ? item.quantity : 0;
}


}