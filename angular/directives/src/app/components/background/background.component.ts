import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  /** variables */
  onToggle:boolean;
  classObj:Object;

  constructor() { 
    this.onToggle = true;
    this.classObj = {
      dColor: this.classObj
    }
  }

  toggle(){
    console.log("Working?")
    this.onToggle = !this.onToggle;
    console.log(this.onToggle);
  }

  ngOnInit() {
  }

}
