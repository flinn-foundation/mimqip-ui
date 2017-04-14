import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalRatingsComponent } from './global-ratings.component';

describe('GlobalRatingsComponent', () => {
  let component: GlobalRatingsComponent;
  let fixture: ComponentFixture<GlobalRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
