
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InvoicingComponent } from './components/invoicing/invoicing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoicingComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]  ,
})
export class AppModule { }
