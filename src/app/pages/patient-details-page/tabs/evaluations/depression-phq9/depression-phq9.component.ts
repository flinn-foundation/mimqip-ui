import {Component, OnInit} from '@angular/core';
import {EvaluationBase} from "../evaluation-base";
import {EvaluationService} from "../../../../../services/evaluation/evaluation.service";

@Component({
  selector: 'app-depression-phq9',
  templateUrl: './depression-phq9.component.html',
  styleUrls: ['./depression-phq9.component.scss']
})
export class DepressionPhq9Component extends EvaluationBase implements OnInit {

  private questions: string[] = [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed or hopeless",
    "Trouble falling asleep, staying asleep or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself, feeling that you are a failure, or feeling that you have let yourself or your family down",
    "Trouble concentrating on things such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed. Or being so fidgety or restless that you have been moving around more than usual",
    "Thinking that you would be better off dead or that you want to hurt yourself in some way"
  ];

  private responses: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(evaluationService: EvaluationService) {
    super(evaluationService);
  }

  ngOnInit() {
  }

  saveResults() {

  }

  addNums(responsesArray) {
    console.log(responsesArray)
  }

}
