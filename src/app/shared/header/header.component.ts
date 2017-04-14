import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  private facility: string = "SAMPLE";

  @Input()
  private doctor: string = "SAMPLE";

  constructor() { }

  ngOnInit() {
  }

  logOut() {
    console.log("Logging out");
  }

}
