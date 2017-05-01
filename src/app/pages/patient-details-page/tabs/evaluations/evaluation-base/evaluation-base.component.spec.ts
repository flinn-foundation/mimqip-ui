import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationBaseComponent } from './evaluation-base.component';

describe('EvaluationBaseComponent', () => {
  let component: EvaluationBaseComponent;
  let fixture: ComponentFixture<EvaluationBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
