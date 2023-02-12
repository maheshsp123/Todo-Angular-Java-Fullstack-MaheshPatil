import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeServiceService } from '../service/data/welcome-service.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  nameParam= '';
  welcomeMeassageFromBean='';
  welocomeMessageErrorFromBean='';
  constructor(private route: ActivatedRoute, private service:WelcomeServiceService) { }

  ngOnInit(): void {
    console.log("param name="+this.route.snapshot.params['name'])
    this.nameParam= this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    //console.log(  this.service.executeHelloWorldBean()  );
    this.service.executeHelloWorldBean().subscribe(
      
    response =>this.handleWelcomeMessageFromHelloWorldBean(response)
      //response=> console.log(response)
      ,
      error =>this.handleWelcomeMessageErrorFromBean(error)
    );
    console.log("the line after subscribe");
  }

  getWelcomeMessageWithParam(){
    //console.log(  this.service.executeHelloWorldBean()  );
    this.service.executeHelloWorldBeanWithParam(this.nameParam).subscribe(
      
    response =>this.handleWelcomeMessageFromHelloWorldBean(response)
      //response=> console.log(response)
      ,
      error =>this.handleWelcomeMessageErrorFromBean(error)
    );
    console.log("the line after subscribe");
  }


  handleWelcomeMessageFromHelloWorldBean(response:any){
    console.log(response.message);
    this.welcomeMeassageFromBean=response.message;
  }

  handleWelcomeMessageErrorFromBean(error:any){
    console.log(error.error.message);
    this.welocomeMessageErrorFromBean=error.error.message
  }

  



}
