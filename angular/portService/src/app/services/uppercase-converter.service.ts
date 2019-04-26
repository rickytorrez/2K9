import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'; 


@Injectable()
export class UppercaseConverterService {

  /** inject http into the constructor */
  constructor(private _http:Http) { }
  
  /** method name is converToUppercase which will receive a json object (obj) with the return type of any (:any)
   * in the method, return a post call which takes two parameters, the url and the body (obj) we input
   * we process the response by using .pipe
   * we handle it by using the map method by returning the response in json format
  */
  public convertToUppercase(obj){
    return this._http.post("http://test-routes.herokuapp.com/test/uppercase", obj).pipe(
    map(res=>{
      return res.json();
    },
    error=>{
      this.handleError(error);
    }));
  }

  handleError(err){
    console.error(err);
    return Observable.throw(err || "Internal Sercer Error");
  }
}
