import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BizComponent } from './biz/biz.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    BizComponent,
    ImpressumComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
