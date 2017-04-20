import { TestBed, inject } from '@angular/core/testing';

import { ProgressNoteService } from './progress-note.service';

describe('ProgressNoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressNoteService]
    });
  });

  it('should ...', inject([ProgressNoteService], (service: ProgressNoteService) => {
    expect(service).toBeTruthy();
  }));
});
