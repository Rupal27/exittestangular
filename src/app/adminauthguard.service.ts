import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';





@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private userService: UserserviceService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
    Observable<boolean> | Promise<boolean> {
    if (this.userService.isAdminLogin) {
      return true;
    }
    else {
      alert('You are not allowed to visit this page...\nYou are redirecting back to Login page')
      this.router.navigateByUrl('/');
    }
  }
}

