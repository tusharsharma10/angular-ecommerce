import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-fliter.component.html',
  styleUrls: ['./product-fliter.component.css']
})
export class ProductFliterComponent {
  categories$;
  @Input() category:string;

  constructor(categoryService:CategoryService) {
    
    
    this.categories$ = categoryService.getCategories().snapshotChanges();
   
  }

  
}
