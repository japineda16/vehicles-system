import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { VehicleFormUserComponent } from 'src/app/ui/vehicle-form-user/vehicle-form-user.component';
import { MatDialog } from '@angular/material/dialog';
import {VehiclesService} from '../../services/vehicles/vehicles.service';
import {DataService} from '../../services/general/data.service';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

export interface PeriodicElement {
  id: number;
  licensePlate: string;
  model: string;
  action: any;
}



@Component({
  selector: 'app-table-for-users',
  templateUrl: './table-for-users.component.html',
  styleUrls: ['./table-for-users.component.scss']
})
export class TableForUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'licensePlate', 'model', 'action'];
  dataSource = this.data.getData('vehicles');

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // Declarations
  error: boolean;
  message: string;

  constructor(
    public dialog: MatDialog,
    private vehicles: VehiclesService,
    private data: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.data.getData('user')) {
      this.router.navigateByUrl('/');
    } else {
      this.dataSource.paginator = this.paginator;
      this.error = false;
    }
  }

  refreshTable() {
    this.vehicles.getVehiclesWithUser(this.data.getData('user').id).subscribe(res => {
      this.data.setData('vehicles', res[0].data[0].vehicles);
      this.dataSource = res[0].data[0].vehicles;
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
