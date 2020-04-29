import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any[];
  filteredProducts: any[];
  categories$;
  category: string;

  constructor(private productService: ProductService,
    categoryService: CategoryService, route: ActivatedRoute) {

    productService
      .getAll()
      .snapshotChanges()
      .subscribe(products => this.filteredProducts = this.products = products);

    this.categories$ = categoryService.getCategories().snapshotChanges();

    route.queryParamMap.subscribe(params => {
      
      this.category = params.get('category');

  this.filteredProducts = (this.category) ? 
                          this.products.filter( p => p.payload.val().category === this.category) :
                          this.products;

    });




  }



}
