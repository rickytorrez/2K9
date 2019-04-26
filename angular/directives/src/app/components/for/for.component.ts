import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  /** define your variables */
  courses:string[];
  students:object[];
  
  /** ngStyle */
  color:string;
  fontSize:string;

  /** ngClass */
  useTdata:boolean;
  classObj:Object;

  /** initiliaze your varilbles */

  constructor() {
    this.courses = ["Angular","React","Node"];

    /** array of objects for students with information */
    this.students = [
      {fName:"John", lName:"Bailey", score:90},
      {fName:"Bob", lName:"Reddy", score:70}
    ]
    this.color = "green";
    this.fontSize = "44";

    this.useTdata = false;
    this.classObj = {
      tdata: this.useTdata
    }
  }

  ngOnInit() {
  }

}
