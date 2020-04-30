import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

appUser:AppUser;  
cart$:Observable<ShoppingCart>

  constructor(private authService: AuthService , private cartService:ShoppingCartService) { 
    
    
  }

  async ngOnInit() {
  
    this.authService.appUser$.subscribe(user => this.appUser = user);
   
     this.cart$ =  (await this.cartService.getCart());
     
  }

  logout() {
    
    this.authService.logout();

  }

}
