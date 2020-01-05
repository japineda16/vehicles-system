import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {VehiclesService} from '../../services/vehicles/vehicles.service';
import {DataService} from '../../services/general/data.service';
import {VehicleFormUserComponent} from '../vehicle-form-user/vehicle-form-user.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-all-vehicles-table',
  templateUrl: './all-vehicles-table.component.html',
  styleUrls: ['./all-vehicles-table.component.scss']
})
export class AllVehiclesTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'licensePlate', 'model', 'action'];
  dataSource = this.data.getData('vehicles');

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  error: boolean;
  message: string;

  constructor(
    // tslint:disable-next-line:variable-name
    private _vehicle: VehiclesService,
    private data: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.data.getData('vehicles'));
  }

  refreshTable() {
    this._vehicle.getAll().subscribe(res => {
      this.data.setData('vehicles', res[0].data);
      this.dataSource = res[0].data;
      this.error = false;
    }, error => {
      console.log(error);
      this.error = true;
      this.message = 'Ha sucedido un error, por favor, verifique su conexión a internet';
    });
  }

  openModal() {
    const dialogRef = this.dialog.open(VehicleFormUserComponent, {
      height: '80%',
      width: '80%',
    });
  }
}
