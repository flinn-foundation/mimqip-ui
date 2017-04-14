import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepressionPhq9Component } from './depression-phq9.component';

describe('DepressionPhq9Component', () => {
  let component: DepressionPhq9Component;
  let fixture: ComponentFixture<DepressionPhq9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepressionPhq9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepressionPhq9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
