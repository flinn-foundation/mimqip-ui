import { Component, OnInit } from '@angular/core';
import {Message} from "../../../models/message";


@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit {

  messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
