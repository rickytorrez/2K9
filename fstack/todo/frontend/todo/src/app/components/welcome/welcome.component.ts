import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';

  // dependency injection to pass a parameter
  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
    // assigns the parameter passed as name to our variable name in this component
    this.name = this._route.snapshot.params['name']
  }

}
