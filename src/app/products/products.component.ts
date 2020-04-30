import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductDetails } from '../models/product-details.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  products: Product[]=[];
  filteredProducts: Product[];
  category: string;

  constructor(private productService: ProductService, route: ActivatedRoute) {

    productService
      .getAll()
      .snapshotChanges()
      .subscribe(products => {
        
        products.forEach( p => {
          
          let product:Product = new Product();
          let temp:any;
          temp = p.payload.val();
          
         
          product.key = p.key;
          
         
          product.productDetails = temp;
         
          this.products.push(product);
         
          });
       
        this.filteredProducts = this.products;
        console.log(this.filteredProducts[0].productDetails);
      
      });

    

    route.queryParamMap.subscribe(params => {
      
      this.category = params.get('category');

  this.filteredProducts = (this.category) ? 
                          this.products.filter( p => p.productDetails.category === this.category) :
                          this.products;

    });




  }



}
