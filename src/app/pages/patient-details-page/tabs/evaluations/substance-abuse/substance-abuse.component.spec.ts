import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstanceAbuseComponent } from './substance-abuse.component';

describe('SubstanceAbuseComponent', () => {
  let component: SubstanceAbuseComponent;
  let fixture: ComponentFixture<SubstanceAbuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstanceAbuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstanceAbuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
