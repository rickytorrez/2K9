import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDataService } from './services/product-data.service';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Http
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
