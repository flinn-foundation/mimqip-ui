import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchizophreniaSubscaleComponent } from './schizophrenia-subscale.component';

describe('SchizophreniaSubscaleComponent', () => {
  let component: SchizophreniaSubscaleComponent;
  let fixture: ComponentFixture<SchizophreniaSubscaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchizophreniaSubscaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchizophreniaSubscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
