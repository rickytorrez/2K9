import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  /** define the variables */
  myCase:number;

  /** initialize them on the constructor */
  constructor() {
    this.myCase = 5;
  }

  ngOnInit() {
  }

}
