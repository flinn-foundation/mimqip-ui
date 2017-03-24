import { Component, OnInit } from '@angular/core';
import {Message} from "../../../../models/message";

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

  message: Message;

  constructor() { }

  ngOnInit() {
  }

  addMessage() {
    // frmvalidator.addValidation("MessageTag","req","Please enter a name for the message tag");
    // frmvalidator.addValidation("MessageTag","maxlen=50","Max length for message is 50");
    // frmvalidator.addValidation("Message","req","Please enter a message");
    // frmvalidator.addValidation("Message","maxlen=50000","Max length for message is 50000");
  }

  editMessage() {

  }

  saveUpdates() {

  }

  cancelUpdates() {

  }
}
