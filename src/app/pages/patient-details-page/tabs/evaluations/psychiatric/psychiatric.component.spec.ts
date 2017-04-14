import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychiatricComponent } from './psychiatric.component';

describe('PsychiatricComponent', () => {
  let component: PsychiatricComponent;
  let fixture: ComponentFixture<PsychiatricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychiatricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychiatricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
