import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  secFeild1 = 'scecond page field 1';
  constructor() { }

  ngOnInit(): void {
  }
  
}
