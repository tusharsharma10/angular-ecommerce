import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Product } from '../models/product.model';
import { ShoppingCart } from '../models/shopping-cart.model';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') p:Product = new Product();
  @Input() shoppingCart:ShoppingCart;
  
  constructor(private cartService:ShoppingCartService) { }
  

  ngOnInit(): void {
  }
  
  addToCart(){
    this.cartService.addToCart(this.p);
  }

 

removeFromCart(){
 
  this.cartService.removeFromCart(this.p);


  }


}
