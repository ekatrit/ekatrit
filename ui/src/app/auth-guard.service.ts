import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginPageService } from './login-page/login-page.service';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {

  constructor(private router: Router, private loginService: LoginPageService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const token = this.loginService.validateToken() ;
    if (token) {
      // Validate the token if necessary
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
  return inject(AuthGuardService).canActivate(next, state);
}