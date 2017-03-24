import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSearchPageComponent } from './patient-search-page.component';

describe('PatientSearchPageComponent', () => {
  let component: PatientSearchPageComponent;
  let fixture: ComponentFixture<PatientSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
