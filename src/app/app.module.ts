import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomersComponent } from './customers/customers.component';
import { DisplayComponent } from './display/display.component';
import { AppRoutindModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    CustomerdetailsComponent,
    CustomersComponent,
    DisplayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutindModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
