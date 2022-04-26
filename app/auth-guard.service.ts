import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from './users.service';
@Injectable()
export class AuthGuard implements CanActivate{
  bool:boolean=false;
    constructor(private authservice: UserService, private router:Router){
    
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> 
    |Promise<boolean>|boolean  {
    console.log('oooooo');
    //  console.log(this.authservice.users[0])
     console.log(this.isLoggedIn());
      if (this.isLoggedIn()) {
        console.log('hhhhhhh')
        return true;
      
    }
    else {
    this.router.navigate(["/login"]);
    console.log('yyyyy')
    return false;
      }
    }
    public isLoggedIn(): boolean {      
      let status = false;      
      if (sessionStorage.getItem('isLoggedIn') == "true") {      
         status = true;      
      }
        else {      
         status = false;      
         }      
      return status;      
      }    
}
