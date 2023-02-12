import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    // let username='mahesh'
    // let password='mahesh'
    // let basicAuthHeaderString= 'Basic '+window.btoa(username+':'+password)

    let basicAuthHeaderString= this.basicAuthService.getAuthenticatedToken();
    let loggedUser = this.basicAuthService.getAuthenticatedUser();
    
    if(basicAuthHeaderString && loggedUser){
        req = req.clone({
          setHeaders : {Authorization : basicAuthHeaderString}
        })
    }

    return next.handle(req)
  }
}
