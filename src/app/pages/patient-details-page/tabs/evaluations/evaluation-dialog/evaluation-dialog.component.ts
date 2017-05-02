import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ScaleDetail} from "../evaluation-base/scale-detail";

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
  scaleDetails: ScaleDetail[];

  @Output()
  displayChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

}
