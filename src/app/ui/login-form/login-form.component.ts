import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/general/data.service';
import {AuthService} from '../../services/auth/auth.service';
import {LoginForm} from '../../models/login/login.form';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: LoginForm = {
    email: '',
    password: ''
  };
  error = false;

  constructor(
    private data: DataService,
    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  validation() {
    if (this.auth.session) {
      // this.router.navigateByUrl();
    }
  }

  submit() {
    this.auth.login(this.user).subscribe(res => {
      this.data.setData('user', res.user);
      this.data.setData('log', res.token_type + ' ' + res.access_token);
      if (res.user.type === 1) {
        this.data.setData('vehicles', res.vehicles.data);
        this.route.navigateByUrl('admin-home');
      }
      if (res.user.type === 2) {
        this.data.setData('vehicles', res.vehicles.data[0].vehicles);
        this.route.navigateByUrl('vehicles');
      }
      this.auth.setSession(true);
    }, error1 => {
      console.log(error1);
      this.error = true;
      this.auth.setSession(false);
    });
  }

}
