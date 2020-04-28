import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;

  constructor(private router:Router,categoryService:CategoryService, private productService:ProductService) { 
    
    this.categories$ = categoryService.getCategories().snapshotChanges();
    
  }

  ngOnInit(): void {
    console.log(this.categories$);
  }

  save(product){

   this.productService.create(product);
   this.router.navigate(['/admin/products']);
  }

}
