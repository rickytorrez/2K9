import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //* properties *//
  products: Object[];

  //* initialize the properties *//
  constructor() { 
    this.products = [
      {
        id: "1",
        name: "MacBook Pro"
      },
      {
        id: "2",
        name: "iPhone"
      }
    ];
  }

  //* return properties in these methods *//
  //* define methods to retrieve the properties above, make them public so they are accessible *//
  public getProducts(){
    return this.products;
  }


  //* *//

  ngOnInit() {
  }

}
