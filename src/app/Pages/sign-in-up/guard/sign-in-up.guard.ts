import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterService } from '../../../Core/routes/router.service';
import { AuthService } from '../../../Account/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SignInUpGuard implements CanActivate {
  constructor(private authService: AuthService, private routerService : RouterService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn){
        return this.routerService.goToApp();
      } else {
        return true;
      }
  }
}
