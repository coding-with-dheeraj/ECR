import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CarComponent } from './car/car.component';
import { AddonsComponent } from './addons/addons.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [

  
  { path: 'home', component: HomeComponent },
  { path: 'cars', component: CarComponent },
  { path: 'addons', component: AddonsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
