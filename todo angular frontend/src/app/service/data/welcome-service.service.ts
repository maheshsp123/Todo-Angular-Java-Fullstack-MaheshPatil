import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WelcomeServiceService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBean(){
    console.log("executing hello world bean");
    return this.http.get('http://localhost:8080/hello-wrold-bean');
    
  }

  executeHelloWorldBeanWithParam(name:string){
    console.log("executing hello world bean with param");
    let basicAuthHeaderString= this.createBasicAuthHttpHeader()
    let headers= new HttpHeaders({Authorization: basicAuthHeaderString})

    return this.http.get('http://localhost:8080/hello-world-variable/'+name, {headers});
    
  }

  createBasicAuthHttpHeader(){
    let username='mahesh'
    let password='mahesh'
    let basicAuthHeaderString= 'Basic '+window.btoa(username+':'+password)
    return basicAuthHeaderString
  }
}
