import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOldAppointmentReportComponent } from './edit-old-appointment-report.component';

describe('EditOldAppointmentReportComponent', () => {
  let component: EditOldAppointmentReportComponent;
  let fixture: ComponentFixture<EditOldAppointmentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOldAppointmentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOldAppointmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
