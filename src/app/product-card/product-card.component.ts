import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {

  @Input('product') p:Product = {category:"", price:0, imageUrl:"",title:""};
  @Input('show-actions') showActions = true; 
  constructor() { }

  

}
