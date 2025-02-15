import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutRoutingModule } from './modules/layout/layout-routing.module';
import { LayoutModule } from './modules/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    LayoutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
