import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CourseGuardService{
  constructor(private authservice:AuthService, private router:Router){ }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
  if(this.authservice.IsAuthenticate()){
    return true;
   }else{
    this.router.navigate(['']);
    return false;
   }
 }
 canActivateChild(childroute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
  return this.canActivate(childroute,state);
 }

 
 
}
