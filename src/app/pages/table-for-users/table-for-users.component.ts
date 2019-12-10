import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { VehicleFormUserComponent } from 'src/app/ui/vehicle-form-user/vehicle-form-user.component';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  id: number;
  plate: string;
  model: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, plate: 'A4X21', model: 'Ford', action: null},
  {id: 2, plate: 'A4X21', model: 'Ford', action: null},
  {id: 3, plate: 'A4X21', model: 'Ford', action: null},
  {id: 4, plate: 'A4X21', model: 'Ford', action: null},
  {id: 5, plate: 'A4X21', model: 'Ford', action: null},
  {id: 6, plate: 'A4X21', model: 'Ford', action: null},
  {id: 7, plate: 'A4X21', model: 'Ford', action: null},
  {id: 8, plate: 'A4X21', model: 'Ford', action: null},
  {id: 9, plate: 'A4X21', model: 'Ford', action: null},
  {id: 10, plate: 'A4X21', model: 'Ford', action: null},
  {id: 11, plate: 'A4X21', model: 'Ford', action: null},
  {id: 12, plate: 'A4X21', model: 'Ford', action: null},
  {id: 13, plate: 'A4X21', model: 'Ford', action: null},
  {id: 14, plate: 'A4X21', model: 'Ford', action: null},
  {id: 15, plate: 'A4X21', model: 'Ford', action: null},
  {id: 16, plate: 'A4X21', model: 'Ford', action: null},
  {id: 17, plate: 'A4X21', model: 'Ford', action: null},
  {id: 18, plate: 'A4X21', model: 'Ford', action: null},
  {id: 19, plate: 'A4X21', model: 'Ford', action: null},
  {id: 20, plate: 'A4X21', model: 'Ford', action: null},
];

@Component({
  selector: 'app-table-for-users',
  templateUrl: './table-for-users.component.html',
  styleUrls: ['./table-for-users.component.scss']
})
export class TableForUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'plate', 'model', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openModal() {
    let dialogRef = this.dialog.open(VehicleFormUserComponent, {
      height: '80%',
      width: '80%',
    });
  }
}
