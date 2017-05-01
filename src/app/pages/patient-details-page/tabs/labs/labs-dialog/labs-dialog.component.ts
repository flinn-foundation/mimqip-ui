import {Component, Input, OnInit} from '@angular/core';
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'app-labs-dialog',
  templateUrl: './labs-dialog.component.html',
  styleUrls: ['./labs-dialog.component.scss']
})
export class LabsDialogComponent implements OnInit {

  @Input()
  display: boolean;

  newLab = {testDate: null};

  selectedTestType: string;

  testTypes: SelectItem[] = [
    {label: 'CBC', value: "CBC"},
    {label: 'Lipid Panel', value: "LIPIDPANEL"},
    {label: 'Liver Enzymes', value: "LIVERENZYMES"},
    {label: 'Lithium', value: "LITHIUM"},
    {label: 'Divalproex', value: "DIVALPROEX"},
    {label: 'Carbamazepine', value: "CARBAMAZEPINE"}
  ];

  defaultDate: Date = new Date();

  yearRange: string = (new Date().getFullYear() - 120) + ':' + (new Date().getFullYear());

  constructor() {
  }

  ngOnInit() {
  }

}
