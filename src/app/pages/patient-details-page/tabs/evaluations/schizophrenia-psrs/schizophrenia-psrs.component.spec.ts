import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchizophreniaPsrsComponent } from './schizophrenia-psrs.component';

describe('SchizophreniaPsrsComponent', () => {
  let component: SchizophreniaPsrsComponent;
  let fixture: ComponentFixture<SchizophreniaPsrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchizophreniaPsrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchizophreniaPsrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
