import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

appUser:AppUser;  
shoppingCartItemCount:number;

  constructor(private authService: AuthService , private cartService:ShoppingCartService) { 
    
    
  }

  async ngOnInit() {
  
    this.authService.appUser$.subscribe(user => this.appUser = user);
   
   let cart$ = await (await this.cartService.getCart()).snapshotChanges();

   cart$.subscribe( cart => {

    let temp:any = cart.payload.val();
    this.shoppingCartItemCount = 0;
    for(let pId in temp.items){
      this.shoppingCartItemCount += temp.items[pId].quantity;
    }

   });

  }

  logout() {
    
    this.authService.logout();

  }

}
