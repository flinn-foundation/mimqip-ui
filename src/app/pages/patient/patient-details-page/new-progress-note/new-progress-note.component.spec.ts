import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgressNoteComponent } from './new-progress-note.component';

describe('NewProgressNoteComponent', () => {
  let component: NewProgressNoteComponent;
  let fixture: ComponentFixture<NewProgressNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProgressNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProgressNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
