import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  private displayDialog: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  compareTreatments() {
    this.displayDialog = true;
  }

}
