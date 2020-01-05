import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {AllVehiclesComponent} from './pages/all-vehicles/all-vehicles.component';
import { TableForUsersComponent } from './pages/table-for-users/table-for-users.component'
import {VehicleComponent} from './pages/vehicle/vehicle.component';
import {UpdateVehicleComponent} from './pages/update-vehicle/update-vehicle.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'all-vehicles', component: AllVehiclesComponent},
  {path: 'vehicles', component: TableForUsersComponent},
  {path: 'vehicle/:id', component: VehicleComponent},
  {path: 'update-vehicle/:id', component: UpdateVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
