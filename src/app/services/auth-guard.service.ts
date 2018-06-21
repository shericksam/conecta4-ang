import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
  private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    // console.log(localStorage.getItem("token"));
    // return true;
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      // console.log("a ini");
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
