import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcsEmployeesComponent } from './tcs-employees.component';

describe('TcsEmploeesComponent', () => {
  let component: TcsEmployeesComponent;
  let fixture: ComponentFixture<TcsEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcsEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcsEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
