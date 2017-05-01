import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.scss']
})
export class LabsComponent implements OnInit {

  displayDialog: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openLabsDialog() {
    this.displayDialog = true;
  }

}
