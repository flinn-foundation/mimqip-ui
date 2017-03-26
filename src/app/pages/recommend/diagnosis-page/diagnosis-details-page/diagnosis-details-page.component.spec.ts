import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisDetailsPageComponent } from './diagnosis-details-page.component';

describe('DiagnosisDetailsPageComponent', () => {
  let component: DiagnosisDetailsPageComponent;
  let fixture: ComponentFixture<DiagnosisDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
