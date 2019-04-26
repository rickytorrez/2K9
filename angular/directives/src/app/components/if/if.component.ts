import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  /** always define your variables first */
  x:number;
  y:number;
  s:string;

  /** initiliaze them on the constructor */
  constructor() { 
    this.x = 10;
    this.y = 20;
    this.s = "success";
  }

  myFun(){
    return true;
  }

  /** assignment functions */
  public getX(){
    return this.x;
  }

  public getY(){
    return this.y;
  }

  ngOnInit() {
  }

}
