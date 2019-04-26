import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CountriesService {

  /** inject the http module by using the constructor */
  /** _http is the variable name */
  constructor(private _http:Http) {

  }

  /** get countries funciton which uses the get method from the _http instance to retrieve all the countries
  * then we piped the response into a map method which handles the response and returns json objects
  */
  public getCountries():any{
    return this._http.get("https://restcountries.eu/rest/v2/all").pipe(map(response=>{
      return response.json();
    }, 

    /** handle error or exception case */
    error=>{
      this.handleError(error)
    }
    ));
  }

  /** error method which logs the error and throws error to the next layer */
  public handleError(error){
    console.error("Error is: " +error);
    return Observable.throw(error || "Internal Server Error");
  }
}
