import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BipolarBbdssComponent } from './bipolar-bbdss.component';

describe('BipolarBbdssComponent', () => {
  let component: BipolarBbdssComponent;
  let fixture: ComponentFixture<BipolarBbdssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BipolarBbdssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BipolarBbdssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
