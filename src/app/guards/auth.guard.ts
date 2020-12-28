import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  authstatus:any;

  constructor(
    private AuthServiceService: AuthServiceService
  ) {}

  canActivate(): boolean {
    this.AuthServiceService.authenticationState.subscribe((data) => {
      this.authstatus=data;
    });
    return this.authstatus;
  }
  
}
