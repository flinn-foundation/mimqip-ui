import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStatusComponent } from './mental-status.component';

describe('MentalStatusComponent', () => {
  let component: MentalStatusComponent;
  let fixture: ComponentFixture<MentalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
