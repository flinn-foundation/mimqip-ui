import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProgressNoteService} from "../../../../services/progress-note/progress-note.service";
import {ProgressNoteDto} from "../../../../swagger-patient-service/model/ProgressNoteDto";
import ProgressNoteTagTypesEnum = ProgressNoteDto.ProgressNoteTagTypesEnum;
import {OverlayPanel} from "primeng/primeng";

@Component({
  selector: 'app-progress-notes',
  templateUrl: './progress-notes.component.html',
  styleUrls: ['./progress-notes.component.scss'],
  providers: [ProgressNoteService]
})
export class ProgressNotesComponent implements OnInit {

  @Input()
  private patientId: number;

  @ViewChild('op') overlayPanel: OverlayPanel;

  private hasErrorSavingNote: boolean = false;

  private progressNote: ProgressNoteDto = this.createEmptyProgressNote();

  private progressNotes: ProgressNoteDto[] = [];

  private noteTags = [
    {label: "General", value: false, noteTagEnum: ProgressNoteDto.ProgressNoteTagTypesEnum.GENERAL},
    {label: "Medications", value: false, noteTagEnum: ProgressNoteDto.ProgressNoteTagTypesEnum.MEDICATIONS},
    {label: "Diagnosis", value: false, noteTagEnum: ProgressNoteDto.ProgressNoteTagTypesEnum.DIAGNOSIS},
    {label: "Labs", value: false, noteTagEnum: ProgressNoteDto.ProgressNoteTagTypesEnum.LABS},
    {label: "Evaluations", value: false, noteTagEnum: ProgressNoteDto.ProgressNoteTagTypesEnum.EVALUATIONS},
  ];

  constructor(private progressNoteService: ProgressNoteService) {
  }

  ngOnInit() {
    this.getExistingMessages();
  }

  private getExistingMessages() {
    this.progressNoteService.getProgressNotes(this.patientId).subscribe(
      (progressNotes: Array<ProgressNoteDto>) => this.progressNotes = progressNotes
    );
  }

  private hasMessageContent(): boolean {
    return this.progressNote.noteText.length != 0
  }

  private saveNote() {

    this.progressNote.progressNoteTagTypes = this.collectProgressNoteTags();

    console.log(this.progressNote);
    console.log(this.patientId);

    this.progressNoteService.saveProgressNoteWithHttpInfo(this.patientId, this.progressNote).subscribe(
      () => {
        this.overlayPanel.hide();
        this.resetProgressNote();
        this.getExistingMessages();
      },
      () => {
        console.log('failure');
        this.hasErrorSavingNote = true;
      }
    );
  }

  private collectProgressNoteTags(): ProgressNoteTagTypesEnum[] {
    let progressNoteTagTypes: ProgressNoteTagTypesEnum[] = [];
    for (let tag of this.noteTags) {
      if (tag.value === true) {
        progressNoteTagTypes.push(tag.noteTagEnum);
      }
    }

    return progressNoteTagTypes;
  }

  private resetProgressNote() {

    this.hasErrorSavingNote = false;
    for (let tag of this.noteTags) {
      tag.value = false;
    }
    this.progressNote = this.createEmptyProgressNote();
  }

  private createEmptyProgressNote(): ProgressNoteDto {
    return {noteText: ""};

  }

}
