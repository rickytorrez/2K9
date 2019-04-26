import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from '../../services/hello-service.service';
import { CustomerServiceService } from '../../services/customer-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-multiple-services',
  templateUrl: './multiple-services.component.html',
  styleUrls: ['./multiple-services.component.css']
})
export class MultipleServicesComponent implements OnInit {

  /** assigned variables */
  private helloResponse:any;
  private customerResponse:any;

  /** injected the services we have imported */
  constructor(
    private _helloService:HelloServiceService, 
    private _customerService:CustomerServiceService) { }


  /** Invoke the methods on those services and assign them to the variables above
   * by using the helloService service and its helloService response method,
   * the app subscribes to the response */    
  ngOnInit() {
    this._helloService.helloService().subscribe(res=>this.helloResponse=res);
    this._customerService.getCustomers().subscribe(res=>this.customerResponse=res);
  }

}
