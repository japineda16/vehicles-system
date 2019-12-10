import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

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
];

@Component({
  selector: 'app-all-vehicles-table',
  templateUrl: './all-vehicles-table.component.html',
  styleUrls: ['./all-vehicles-table.component.scss']
})
export class AllVehiclesTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'plate', 'model', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
