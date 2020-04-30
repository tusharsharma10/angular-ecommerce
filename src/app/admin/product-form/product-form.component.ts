import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductDetails } from '../../models/product-details.model';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product:Product = new Product();
  id;


  constructor(
    private router:Router,
    categoryService:CategoryService, 
    private productService:ProductService,
    private route:ActivatedRoute) { 
    
    this.categories$ = categoryService.getCategories().snapshotChanges();
    this.id = this.route.snapshot.paramMap.get('id');
    
    if(this.id) {
    console.log(this.id);
      this.productService
      .getOneProduct(this.id)
      .snapshotChanges()
      .pipe( take(1) )
      .subscribe( p => {
        
        let temp:any;
        let key = p.key;
        temp = p.payload.val();
        this.product = new Product();
        this.product.key = key;
        this.product.productDetails = new ProductDetails();
        this.product.productDetails = temp;
     
      });
       
     

     
     
     
      

    }
     
                                        
     
  }

  ngOnInit(): void {
    
  //  this.product.key = "";
  //  this.product.productDetails = this.productDetails;

  }

  save(product){
    
    if(this.id)
    this.productService.updateProduct(product,this.id);
    
    else
    this.productService.create(product);
   
    this.router.navigate(['/admin/products']);
  }


  delete(){

    if(confirm('Are you sure you want to delete this product?')){

      this.productService.deleteProduct(this.id);
      this.router.navigate(['/admin/products']);
    }

   
  }

  // showConsole(c){
  //   console.log(this.product.category);
  // }

}
