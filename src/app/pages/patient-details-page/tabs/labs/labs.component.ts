import { Component, OnInit } from '@angular/core';
import {LabService} from "../../../../services/lab/lab.service";

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss'],
  providers: [LabService]
})
export class LabsComponent implements OnInit {

  displayDialog: boolean = false;

  constructor(private labService: LabService) { }

  ngOnInit() {
  }

  openLabsDialog() {
    this.displayDialog = true;
  }

}
