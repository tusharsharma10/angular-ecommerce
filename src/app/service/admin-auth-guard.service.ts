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

// ultimately returns a boolean value
// so in app-routing module this property controls access on particular routes.
  canActivate(){

      return this.authService.user$.pipe(  

        switchMap(user =>  this.userService.get(user.uid).valueChanges()),
        map(appUser => appUser.isAdmin)
    );

  }

}
