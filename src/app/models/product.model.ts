import { ProductDetails } from './product-details.model';

export class Product{
   
    key:string;
    productDetails:ProductDetails;
    
    constructor(){

        this.key = "";
        this.productDetails = new ProductDetails();
    }

   
}