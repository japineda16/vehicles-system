import { Component, OnInit } from '@angular/core';
import { VehicleFormUserComponent } from 'src/app/ui/vehicle-form-user/vehicle-form-user.component';
import { MatDialog } from '@angular/material/dialog';
import {DataService} from '../../services/general/data.service';
import {Router} from '@angular/router';
import {VehiclesService} from '../../services/vehicles/vehicles.service';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.scss']
})
export class AllVehiclesComponent implements OnInit {

  constructor(
            private data: DataService,
            private router: Router,
            // tslint:disable-next-line:variable-name
            private _vehicle: VehiclesService
            ) { }

  ngOnInit() {
    if (!this.data.getData('user')) {
      this.router.navigateByUrl('/');
    }
  }
}
