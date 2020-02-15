import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/general/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.data.getData('user') && this.data.getData('user').type !== 1) {
      this.router.navigateByUrl('/');
      console.log(this.data.getData('user'));
    }
  }

}
