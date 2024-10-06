import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean => {  
  let loginService = inject(LoginService);
  let loggedInUser = loginService.checkLoggedInUser();
  const router = inject(Router);
  
  // to get the logged in user and validating its role if admin then allowing to redirect else redirecting to the login form
  if(loggedInUser && loggedInUser[0] && loggedInUser[0]?.role == 'admin'){
    return true;
  }else{
    router.navigateByUrl('/login');
    return false;
  }

};
