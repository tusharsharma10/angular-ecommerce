import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private authService:AuthService, private userService: UserService) { }

/* ultimately returns a boolean value
 so in app-routing module this property controls access on particular routes.
valueChanges() method returns a Observable 
 */
  canActivate(){

      return this.authService.appUser$.pipe(  
      
        map(appUser => appUser.isAdmin)
    
      );

  }

}
