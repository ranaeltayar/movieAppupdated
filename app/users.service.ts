import { Injectable } from "@angular/core";
@Injectable()
export class UserService{

  public loggedin : boolean = false;

    users = [
        {
          email: "rana.eltayar@gmail.com",
          password: 1234567
        }
        
      ];
      login(){
        this.loggedin=true;
       /// console.log('ww');
        return true;
      }
      logout() :void {    
        sessionStorage.setItem('isLoggedIn','false');    
        sessionStorage.removeItem('token');    
        }    
    
      }