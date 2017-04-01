import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMediciationsComponent } from './current-mediciations.component';

describe('CurrentMediciationsComponent', () => {
  let component: CurrentMediciationsComponent;
  let fixture: ComponentFixture<CurrentMediciationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMediciationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMediciationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
