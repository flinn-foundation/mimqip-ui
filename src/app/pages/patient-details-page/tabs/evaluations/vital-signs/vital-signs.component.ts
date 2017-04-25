import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.scss']
})
export class VitalSignsComponent implements OnInit {

  private feetSelectItems: SelectItem[] = [];
  private inchesSelectItems: SelectItem[] = [];

  private selectedItem: string;
  private selectedItem2: string;

  constructor() {

    this.feetSelectItems.push({label: "Select", value: null});
    for (var i = 1; i < 8; i++) {
      this.feetSelectItems.push({label: i.toString(), value: i});
    }

    this.inchesSelectItems.push({label: "Select", value: null});
    for (var i = 0; i < 12; i++) {
      this.inchesSelectItems.push({label: i.toString(), value: i});
    }


  }

  ngOnInit() {
  }



}
