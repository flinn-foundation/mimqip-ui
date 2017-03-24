import { Component, OnInit } from '@angular/core';
import {Rule} from "../../../models/rule";

@Component({
  selector: 'app-rules',
  templateUrl: 'rules.component.html',
  styleUrls: ['rules.component.scss']
})
export class RulesComponent implements OnInit {

  rules: Rule[];

  constructor() { }

  ngOnInit() {
  }

}
