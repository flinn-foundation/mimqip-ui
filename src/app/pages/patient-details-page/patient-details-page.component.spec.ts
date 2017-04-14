import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsPageComponent } from './patient-details-page.component';

describe('PatientDetailsPageComponent', () => {
  let component: PatientDetailsPageComponent;
  let fixture: ComponentFixture<PatientDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
