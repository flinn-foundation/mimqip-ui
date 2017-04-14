import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCreationPageComponent } from './patient-creation-page.component';

describe('PatientCreationPageComponent', () => {
  let component: PatientCreationPageComponent;
  let fixture: ComponentFixture<PatientCreationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCreationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
