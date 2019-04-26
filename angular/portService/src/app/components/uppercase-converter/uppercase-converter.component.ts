import { Component, OnInit } from '@angular/core';

import { UppercaseConverterService } from '../../services/uppercase-converter.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css']
})
export class UppercaseConverterComponent implements OnInit {

  private result:any;

  /** inject the service */
  constructor(private _service:UppercaseConverterService) { }

  ngOnInit() {
  }

  /** implement a service 
   * which takes the object (obj) that comes from the html. return type is any, use the service
   * to convert the (obj) to uppercase. subscribe and handle the different types of responses
   * the first one uses the new result variable and converts it into the response
   * then we handel the error with the HTTPErrorResponse and log the error
   */
  public convert(obj):any{
    this._service.convertToUppercase(obj).subscribe(
      res=>this.result = res,
      (err:HttpErrorResponse)=>{
        console.error(err);
      }
    )
  }
}
