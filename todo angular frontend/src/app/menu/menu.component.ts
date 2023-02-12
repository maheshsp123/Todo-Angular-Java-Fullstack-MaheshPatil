import { Component, OnInit } from '@angular/core';
import { MyAuthenticatorService } from '../service/my-authenticator.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn:boolean= false
  constructor(public myauth:MyAuthenticatorService) { }

  ngOnInit(): void {
    this.isLoggedIn= this.myauth.isUserLoggedIn()
  }

}
