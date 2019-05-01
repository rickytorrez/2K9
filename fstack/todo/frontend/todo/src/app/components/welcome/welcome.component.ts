import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';

  // dependency injection to pass a parameter
  constructor(
    private _route:ActivatedRoute,
    private _welcomeService:WelcomeDataService) { }

  ngOnInit() {
    // assigns the parameter passed as name to our variable name in this component
    this.name = this._route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this._welcomeService.executeHelloWorldBeanService());
    this._welcomeService.executeHelloWorldBeanService().subscribe();
  }

}
