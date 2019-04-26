import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { AtmComponent } from './components/atm/atm.component';
import { ForComponent } from './components/for/for.component';
import { MoviesComponent } from './components/movies/movies.component';
import { BackgroundComponent } from './components/background/background.component';


@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    SwitchComponent,
    AtmComponent,
    ForComponent,
    MoviesComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
