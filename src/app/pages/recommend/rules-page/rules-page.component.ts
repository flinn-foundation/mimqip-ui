import { Component, OnInit } from '@angular/core';
import {Rule} from "../../../models/rule";

@Component({
  selector: 'app-rules-page',
  templateUrl: 'rules-page.component.html',
  styleUrls: ['rules-page.component.scss']
})
export class RulesPageComponent implements OnInit {

  rules: Rule[];

  constructor() { }

  ngOnInit() {
  }

}
