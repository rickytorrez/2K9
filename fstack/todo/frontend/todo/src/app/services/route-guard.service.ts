import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private _hardcodedAuthService: HardcodedAuthenticationService,
    private _router: Router,
  ) { }

  // canActivate is a method from the implemente CanActivate interface
  // bring in the authService to check if the user is logged in to provide access when the method is invoked
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this._hardcodedAuthService.isUserLoggedIn()){
      return true;
    } else {
      this._router.navigate(['login'])
      return false;
    }
  }
}
