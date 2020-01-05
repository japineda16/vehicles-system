import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: any = {};

  constructor() { }

  getData(key: string) {
    return this.data[key] ? this.data[key] : null;
  }

  setData(key: string, data: any) {
    this.data[key] = data;
  }

  getObservable(key: string): Observable<any> {
    return this.data[key];
  }
}
