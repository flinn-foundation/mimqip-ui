import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsDialogComponent } from './labs-dialog.component';

describe('LabsDialogComponent', () => {
  let component: LabsDialogComponent;
  let fixture: ComponentFixture<LabsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
