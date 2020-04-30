import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { ProductDetails } from '../models/product-details.model';
import { ShoppingCart } from '../models/shopping-cart.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit  {

  @Input('show-actions') showActions = true; 
  @Input('product') p:Product ;
  @Input('shopping-cart') shoppingCart:ShoppingCart;

  constructor(private cartService:ShoppingCartService) { }
  
  ngOnInit(): void {}

  addToCart(){
    this.cartService.addToCart(this.p);
  }

  removeFromCart(){
 
    this.cartService.removeFromCart(this.p);
  
  
    }

    getQuantity(){

      if(!this.shoppingCart) return 0;
      let item = this.shoppingCart.items[this.p.key];
      return item ? item.quantity : 0;
  }
  



}