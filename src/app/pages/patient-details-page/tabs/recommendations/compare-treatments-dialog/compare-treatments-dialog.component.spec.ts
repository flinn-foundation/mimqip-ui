import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareTreatmentsDialogComponent } from './compare-treatments-dialog.component';

describe('CompareTreatmentsDialogComponent', () => {
  let component: CompareTreatmentsDialogComponent;
  let fixture: ComponentFixture<CompareTreatmentsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareTreatmentsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareTreatmentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
