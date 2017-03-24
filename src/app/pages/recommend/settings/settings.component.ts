import { Component, OnInit } from '@angular/core';
import {Setting} from "../../../models/setting";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settings : Setting[];

  constructor() { }

  ngOnInit() {
  }

}
