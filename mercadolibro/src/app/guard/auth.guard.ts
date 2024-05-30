import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.isLoggedIn()) {
      return true; 
    } else {
      this.router.navigate(['/inicio']);
      return false; 
    }
  }
}
