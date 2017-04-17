import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {MessageApi} from "../../swagger-recommendation-service/api/MessageApi";

@Injectable()
export class MessageService extends MessageApi {

  constructor(http: Http) {
    super(http, "http://localhost:8081", null);
  }

}
