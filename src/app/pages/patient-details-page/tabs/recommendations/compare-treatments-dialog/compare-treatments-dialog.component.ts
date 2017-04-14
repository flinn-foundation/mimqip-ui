import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-compare-treatments-dialog',
  templateUrl: './compare-treatments-dialog.component.html',
  styleUrls: ['./compare-treatments-dialog.component.scss']
})
export class CompareTreatmentsDialogComponent implements OnInit {

  @Input()
  private display: boolean;

  @Output()
  private displayChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
