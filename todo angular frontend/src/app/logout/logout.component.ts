import { Component, OnInit } from '@angular/core';
import { MyAuthenticatorService } from '../service/my-authenticator.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private myAuth:MyAuthenticatorService) { }

  ngOnInit(): void {
    console.log("attempting to logout user= "+this.myAuth.getCurrentUser())
    this.myAuth.logOutUser();
    console.log('user logged out')
  }

}
