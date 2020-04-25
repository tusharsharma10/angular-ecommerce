import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,private router: Router) { }
  
  
  canActivate(route, state:RouterStateSnapshot): Observable<boolean>  {
   
   const observable =  this.authService.user$.pipe( map( user=>{

      if (user)
      return true;

      this.router.navigate(['/login'],{ queryParams:{returnUrl: state.url}});
      return false;

  }));

    return observable;
}
  
  
  
  


}
