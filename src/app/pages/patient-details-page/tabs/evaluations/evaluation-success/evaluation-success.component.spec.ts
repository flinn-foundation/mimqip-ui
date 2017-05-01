import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationSuccessComponent } from './evaluation-success.component';

describe('EvaluationSuccessComponent', () => {
  let component: EvaluationSuccessComponent;
  let fixture: ComponentFixture<EvaluationSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
