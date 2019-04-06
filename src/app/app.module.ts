import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BizComponent } from './biz/biz.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatBadgeModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AlertpanelComponent } from './alertpanel/alertpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    BizComponent,
    MapComponent,
    AlertpanelComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatBadgeModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
