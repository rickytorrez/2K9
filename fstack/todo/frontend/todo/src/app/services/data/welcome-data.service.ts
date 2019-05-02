import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// defines what kind of response we expect to get back
// creates a simple bean defining the structure of the response we're expecting
export class HelloWorldBean {
  constructor(
      public message:string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private _http:HttpClient
  ) { }

  // indicate what kind of response we're expecting - <HelloWorldBean>
  executeHelloWorldBeanService(){
    return this._http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  // indicate the get request URL while passing the name variable and updating the url with ticks
  executeHelloWorldServiceWithPathVariable(name){
    return this._http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }

}
