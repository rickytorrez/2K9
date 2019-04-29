import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private _http: Http) { }

  public getProducts():any{
    return this._http.get('http://localhost:8080/api/products').pipe(
      map(res=>{
        return res.json();
      })
    );
  }
}
