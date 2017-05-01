import {Component, Input, OnInit} from '@angular/core';
import {MessageDto} from "../../../../swagger-recommendation-service/model/MessageDto";
import {MessageService} from "../../../../services/message/message.service";

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  providers: [MessageService]
})
export class RecommendationsComponent implements OnInit {

  messages: Array<MessageDto>;

  displayDialog: boolean = false;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.getMessages().subscribe(
      (messages: Array<MessageDto>) => this.messages = messages,
      (error) => console.log(error)
    );
  }

  compareTreatments() {
    this.displayDialog = true;
  }

}
