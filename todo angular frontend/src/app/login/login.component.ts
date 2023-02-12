import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'cypress/types/jquery';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { MyAuthenticatorService } from '../service/my-authenticator.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName='user Id';
  pswd='';
  flagg= false;
  msgg= '';
  constructor(private router:Router, private auth:MyAuthenticatorService
              ,private basicAuthService:BasicAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  submitBtnClickJWTAuth()
  {
    console.log("submit button clicked for JWT authnetication, user= "+this.userName);
    this.basicAuthService.executeJWTAuthenticationService(this.userName, this.pswd)
                          .subscribe(
                            data=>{
                                this.msgg = data.message;
                                console.log("pswd is matchin hello");
                                    this.flagg= false;
                                    this.router.navigate(['welcome',this.userName]);

                            },
                            error=>{
                              this.msgg ='invalid username or password'
                            }
                          )

  }
  
  submitBtnClickBasicAuth()
  {
    console.log("submit button clicked for basic authnetication, user= "+this.userName);
    this.basicAuthService.executeAuthenticationService(this.userName, this.pswd)
                          .subscribe(
                            data=>{
                                this.msgg = data.message;
                                console.log("pswd is matchin hello");
                                    this.flagg= false;
                                    this.router.navigate(['welcome',this.userName]);

                            },
                            error=>{
                              this.msgg ='invalid username or password'
                            }
                          )

  }
  
  submitBtnClick()
  {
    console.log("submit button clicked un= "+this.userName);
    //if( this.pswd === 'hello')
    if(this.auth.authenticate(this.userName, this.pswd))
    {  
      console.log("pswd is matchin hello");
      this.flagg= false;
      this.router.navigate(['welcome',this.userName]);

    }
    else 
    {  
      console.log("match failed");
      this.flagg =true;

    }
  }
}
