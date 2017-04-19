import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-notes',
  templateUrl: './progress-notes.component.html',
  styleUrls: ['./progress-notes.component.scss']
})
export class ProgressNotesComponent implements OnInit {

  private progressNote: any = {tags: "", message: ""};

  private noteTags = [
    {label: "General", value: false},
    {label: "Medications", value: false},
    {label: "Diagnosis", value: false},
    {label: "Labs", value: false},
    {label: "Evaluations", value: false},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  saveNote() {
    console.log("Create Note");
  }

  hasMessageContent(): boolean {
    return this.progressNote.message.length != 0
  }

}
