import { Component, OnInit } from '@angular/core';
import { VehicleFormUserComponent } from 'src/app/ui/vehicle-form-user/vehicle-form-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.scss']
})
export class AllVehiclesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  openModal() {
    let dialogRef = this.dialog.open(VehicleFormUserComponent, {
      height: '400px',
      width: '80%',
    });
  }

}
