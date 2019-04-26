import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  /** define a global variable **/
  sellers: string[];
  hide: boolean;

  /** initialize the sellers array **/
  /** this. hide property hides the sellers names on the html **/
  constructor() { 
    this.sellers = ["BestBuy", "Apple", "Amazon"]
    this.hide = true;
  }

  /** add a method to initialize and return an array of strings back **/
  getSellers(): string[]{
    return this.sellers;
  }

  /** add a method to toggle the showing and hiding of the sellers array  **/
  toggle(){
    this.hide=!this.hide;
  }

  ngOnInit() {
  }

}
