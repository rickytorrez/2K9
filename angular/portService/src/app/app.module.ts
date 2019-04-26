import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UppercaseConverterService } from './services/uppercase-converter.service';

import { AppComponent } from './app.component';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';


@NgModule({
  declarations: [
    AppComponent,
    UppercaseConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UppercaseConverterService],
  bootstrap: [UppercaseConverterComponent]
})
export class AppModule { }
