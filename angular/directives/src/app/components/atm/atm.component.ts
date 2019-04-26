import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  atmOption:number;

  constructor() { 
    this.atmOption = 5;
  }

  ngOnInit() {
  }

}
