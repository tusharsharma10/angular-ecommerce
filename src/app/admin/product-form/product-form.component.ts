import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product;


  constructor(
    private router:Router,
    categoryService:CategoryService, 
    private productService:ProductService,
    private route:ActivatedRoute) { 
    
    this.categories$ = categoryService.getCategories().snapshotChanges();
    let id = this.route.snapshot.paramMap.get('id');
    
    if(id) {
     
      this.productService
      .getOneProduct(id)
      .snapshotChanges()
      .pipe( take(1) )
      .subscribe( p => this.product = p.payload.val());

    

    }
     
                                        
     
  }

  ngOnInit(): void {
    
  }

  save(product){

   this.productService.create(product);
   this.router.navigate(['/admin/products']);
  }


  // showConsole(){
  //   console.log(this.product);
  // }

}
