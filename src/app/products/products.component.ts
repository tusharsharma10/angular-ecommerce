import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any[]=[];
  filteredProducts: any[];
  category: string;

  constructor(private productService: ProductService, route: ActivatedRoute) {

    productService
      .getAll()
      .snapshotChanges()
      .subscribe(products => {
        
        products.forEach( p => this.products.push(p.payload.val()))
       
        this.filteredProducts = this.products;
      
      
      });

    

    route.queryParamMap.subscribe(params => {
      
      this.category = params.get('category');

  this.filteredProducts = (this.category) ? 
                          this.products.filter( p => p.category === this.category) :
                          this.products;

    });




  }



}
