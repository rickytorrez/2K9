import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerServiceService {

  /** dependency injection */
  constructor(private _http:Http) { }

  /** GET method to retrieve the customers */
  public getCustomers(){
    return this._http.get("https://www.w3schools.com/angular/customers.php").pipe(
      map(response=>{
        return response.json()
      },
      error=>{
        this.handleError(error)
      }));
  }

  /** handleError method */
  handleError(err){
    console.log(err);
    return Observable.throw(err || "Internal Server Error")
  }

}
