import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/models/product.model';
import { SnapshotAction } from 'angularfire2/database';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

 //temp:any[] = [];
  products:any[];
  filteredProducts:any[];

  constructor(private productService: ProductService) { 

    this.productService
   .getAll()
   .snapshotChanges()
   .subscribe(products => this.filteredProducts = this.products = products);
     
    
   

  }

  ngOnInit(): void {
  }

  filter(query:string){

    this.filteredProducts = (query) ? this.products.filter(p => p.payload.val().title.toLowerCase().includes(query.toLowerCase())) : this.products ;

  }



}
