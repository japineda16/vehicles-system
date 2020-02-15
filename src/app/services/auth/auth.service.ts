import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginForm} from '../../models/login/login.form';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public session = false;
  // @ts-ignore
  public sessionEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient,
  ) { }

  login(data: LoginForm): Observable<any> {
    const headers = { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' };
    return this.http.post(environment.direction + 'api/auth/login/', JSON.stringify(data), {headers});
  }

  setSession(data: boolean) {
    this.session = data;
    this.sessionEvent.emit(this.session);
  }

  getSession() {
    return this.session;
  }

  logout(auth) {
    const headers = { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest', Authorization: auth };

    return this.http.get(environment.direction + 'api/auth/logout', {headers});
  }
}
