import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-evaluation-dialog',
  templateUrl: './evaluation-dialog.component.html',
  styleUrls: ['./evaluation-dialog.component.scss']
})
export class EvaluationDialogComponent implements OnInit {

  @Input()
  display: boolean;

  @Input()
  name: string;

  @Input()
  longDescription: string;

  @Input()
  scaleDescriptions: string[];

  @Output()
  private displayChange = new EventEmitter<boolean>();

  scaleLevels: string[] = ["VERY MILD", "MILD", "MODERATE", "MODERATELY SEVERE", "SEVERE", "EXTREMELY SEVERE"];

  constructor() { }

  ngOnInit() {
  }

}
