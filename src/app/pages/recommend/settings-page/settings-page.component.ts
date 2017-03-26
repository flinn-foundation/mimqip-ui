import { Component, OnInit } from '@angular/core';
import {Setting} from "../../../models/setting";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  settings : Setting[];

  constructor() { }

  ngOnInit() {
  }

}
