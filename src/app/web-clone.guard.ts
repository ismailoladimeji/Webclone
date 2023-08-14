
import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class webCloneGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): any {
    console.log("Url: " + url)
    let val: any= localStorage.getItem('isUserLoggedIn');
    if (val != null && val == "true") {
      if (url == "/login")
        this.router.parseUrl('/Home');
      else
        return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
