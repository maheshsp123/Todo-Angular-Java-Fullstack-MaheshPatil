import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }
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

  executeJWTAuthenticationService(username:string, password:string){
   
    return this.http.post<any>(`${API_URL}/authenticate`, {username,password})
      .pipe(
        map(
          data=> {
            sessionStorage.setItem('loggedUser',username)
            sessionStorage.setItem('token',`Bearer ${data.token}`)

            return data
          }
        )
      )
    
  }

  executeAuthenticationService(username:string, password:string){
    console.log("executing basic authentication bean with param");

    let basicAuthHeaderString= 'Basic '+window.btoa(username+':'+password)
    let headers= new HttpHeaders({Authorization: basicAuthHeaderString})

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, {headers})
      .pipe(
        map(
          data=> {
            sessionStorage.setItem('loggedUser',username)
            sessionStorage.setItem('token',basicAuthHeaderString)

            return data
          }
        )
      )
    
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('loggedUser')
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser() )
      return sessionStorage.getItem('token') 
    else
     return null
  }
  
  logOutUser(){
    sessionStorage.removeItem('loggedUser');
    sessionStorage.removeItem('token');
  }
  // logOutUser(){
  //   sessionStorage.removeItem('loggedUser');
  // }

  isUserLoggedIn(){
    if(sessionStorage.getItem('loggedUser') == null)
      return false;
    else
      return true;
  }

  

  getCurrentUser()
  {
    if(sessionStorage.getItem('loggedUser') == null)
      return 'none';
    else
      return sessionStorage.getItem('loggedUser') 
  }
}

export class AuthenticationBean{

  constructor(public message:string){

  }
}
