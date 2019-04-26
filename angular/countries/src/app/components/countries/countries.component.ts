import { Component, OnInit } from '@angular/core';

/** import countries service */
import { CountriesService } from '../../services/countries.service';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  /** global variable in this component */
  private data: any;
  
  /** inject the service into the component through the constructor */
  constructor(private _service:CountriesService) { }

  /** uses the service to invoke a function, handles the response by converting into the data field */
  ngOnInit() {
    this._service.getCountries().subscribe(response=>{
      this.data = response;
    },

    /** handling errors whether client or server by using the HttpError Response */
    (error: HttpErrorResponse)=>{
      if(error.error instanceof Error){
        console.error("Client side error || 404")
      } else {
        console.error("Server side error")
      }
    });
  }
}
