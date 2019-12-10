import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableForUsersComponent } from './table-for-users.component';

describe('TableForUsersComponent', () => {
  let component: TableForUsersComponent;
  let fixture: ComponentFixture<TableForUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableForUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableForUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
