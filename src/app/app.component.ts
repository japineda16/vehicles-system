import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from './services/auth/auth.service';
import {DataService} from './services/general/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'vehicles';
  public session = this.auth.session;
  public type;
  constructor(
    private auth: AuthService,
    private data: DataService
  ) {
  }

  close() {
    this.auth.logout(this.data.getData('log')).subscribe(res => {
      console.log(res);
      delete this.data.data;
      window.location.replace('/');
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.session = this.auth.session;
    this.type = this.data.getData('user').type;
  }

  ngOnInit(): void {
    this.auth.sessionEvent.subscribe(() => {
      this.session = this.auth.getSession();
      this.type = this.data.getData('user').type;
    });
  }
}
