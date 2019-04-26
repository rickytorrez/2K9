import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class HelloServiceService {

  /** dependency injection */
  constructor(private _http:Http) { }

  /** method to get the hello route */
  public helloService(){
    return this._http.get("http://test-routes.herokuapp.com/test/hello").pipe(
      map(response=>{
        return response.json()
      },
      error=>{
        this.handleError(error)
      }));
  }

  /** handleError method */
  handleError(err){
    console.error(err);
    return Observable.throw(err || "Internal Server Error")
  }
}
