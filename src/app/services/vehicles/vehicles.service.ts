import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {VehicleInterface} from '../../models/vehicle/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(
    private http: HttpClient
  ) { }

  getVehiclesWithUser(id): Observable<any> {
    const headers = { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' };

    return this.http.get(environment.direction + 'api/user-vehicle/' + id, {headers});
  }

  getAll(): Observable<any> {
    const headers = { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' };

    return this.http.get(environment.direction + 'api/vehicles', {headers});
  }

  getOne(id): Observable<any> {
    const headers = { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' };

    return this.http.get(environment.direction + 'api/vehicles/' + id, {headers});
  }

  makeVehicle(vehicle: VehicleInterface): Observable<any> {
    const headers = { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' };

    return this.http.post(environment.direction + 'api/vehicles', vehicle, {headers});
  }

  delete(id): Observable<any> {
    const headers = { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' };

    return this.http.delete(environment.direction + 'api/vehicles/' + id, {headers});
  }

  updateVehicle(vehicle: VehicleInterface, id: number): Observable<any> {
    const headers = { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' };

    return this.http.put(environment.direction + 'api/vehicles/' + id, vehicle, {headers});
  }
}
