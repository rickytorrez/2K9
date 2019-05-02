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
  welcomeMessageFromService: string

  // dependency injection to pass a parameter
  constructor(
    private _route:ActivatedRoute,
    private _welcomeService:WelcomeDataService) { }

  ngOnInit() {
    // assigns the parameter passed as name to our variable name in this component
    this.name = this._route.snapshot.params['name']
  }

  // execute the HelloWorld bean service, subscribe and whenever a response comes back do run the handleSuccessfulResponse method
  getWelcomeMessage(){
    this._welcomeService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
      );
  }

  // if a successgul response comes back ... do this =>
  handleSuccesfulResponse(response){
    this.welcomeMessageFromService = response.message;
  }

  // if an error pops up, specify what it is
  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message
  }
  
  getWelcomeMessageWithParameter(){
    this._welcomeService.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error)
      );
  }

}
