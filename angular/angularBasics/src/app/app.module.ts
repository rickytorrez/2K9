import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SellersComponent } from './sellers/sellers.component';


@NgModule({

  /** components **/
  declarations: [
    AppComponent,
    ProductComponent,
    SellersComponent
  ],

  /** imports all external modules that are required for our app to work **/
  imports: [
    BrowserModule
  ],

  /** **/
  providers: [],

  /** starting point of our application - what is the first component that should be used **/
  bootstrap: [ProductComponent]
})
export class AppModule { }
