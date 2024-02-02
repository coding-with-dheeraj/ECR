import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CarComponent } from './car/car.component';
import { AddonsComponent } from './addons/addons.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { RouterModule } from '@angular/router';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import '@angular/compiler';
import { GoogleMapsModule } from '@angular/google-maps';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PagenotfoundComponent,
    ReservationComponent,
    CarComponent,
    AddonsComponent,
    CheckoutComponent,
    ContactusComponent,
    AboutComponent,
    SummaryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    TypeaheadModule,
    GooglePlaceModule,
    GoogleMapsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
