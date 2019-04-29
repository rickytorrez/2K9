import { Component } from '@angular/core';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private products:any;

  constructor(private _pDS:ProductDataService){}

  /* display the product as soon as the service is initialized */
  ngOnInit(){
    this._pDS.getProducts().subscribe(res=>{
      this.products = res;
    })
  }

}
