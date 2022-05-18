import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcsEmploeesComponent } from './tcs-emploees.component';

describe('TcsEmploeesComponent', () => {
  let component: TcsEmploeesComponent;
  let fixture: ComponentFixture<TcsEmploeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcsEmploeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcsEmploeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
