import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchizophreniaComponent } from './schizophrenia.component';

describe('SchizophreniaComponent', () => {
  let component: SchizophreniaComponent;
  let fixture: ComponentFixture<SchizophreniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchizophreniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchizophreniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
