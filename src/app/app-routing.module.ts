import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AllVehiclesComponent} from './pages/all-vehicles/all-vehicles.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'all-vehicles', component: AllVehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
