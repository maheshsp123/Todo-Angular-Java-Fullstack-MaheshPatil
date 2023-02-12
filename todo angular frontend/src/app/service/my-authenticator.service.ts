import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyAuthenticatorService {

  constructor() { }
  authenticate(userName: string,pswd: string){
    
    console.log("before auth ="+ this.isUserLoggedIn())
    if (userName==='mahesh' && pswd==='hello'){
      sessionStorage.setItem('loggedUser',userName)
      console.log("after auth ="+ this.isUserLoggedIn())
      return true;
    }
    else 
    return false;
  }

  isUserLoggedIn(){
    if(sessionStorage.getItem('loggedUser') == null)
      return false;
    else
      return true;
  }

  logOutUser(){
    sessionStorage.removeItem('loggedUser');
  }

  getCurrentUser()
  {
    if(sessionStorage.getItem('loggedUser') == null)
      return 'none';
    else
      return sessionStorage.getItem('loggedUser') 
  }
}
