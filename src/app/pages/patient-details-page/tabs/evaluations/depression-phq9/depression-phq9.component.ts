import {Component, OnInit} from '@angular/core';
import {EvaluationBase} from "../evaluation-base";
import {EvaluationService} from "../../../../../services/evaluation/evaluation.service";
import {EvaluationDto} from "../../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationResponseDto} from "../../../../../swagger-patient-service/model/EvaluationResponseDto";

@Component({
  selector: 'app-depression-phq9',
  templateUrl: './depression-phq9.component.html',
  styleUrls: ['./depression-phq9.component.scss']
})
export class DepressionPhq9Component extends EvaluationBase implements OnInit {

  evaluationDto: EvaluationDto = {
    evaluationType: EvaluationTypeEnum.PHQ9,
    evaluationResponses: []
  };

  scoredEvaluationResponses: EvaluationResponseDto[] = [
    { prompt: "Little interest or pleasure in doing things", answer: "" },
    { prompt: "Feeling down, depressed or hopeless", answer: "" },
    { prompt: "Trouble falling asleep, staying asleep or sleeping too much", answer: "" },
    { prompt: "Feeling tired or having little energy", answer: "" },
    { prompt: "Poor appetite or overeating", answer: "" },
    { prompt: "Feeling bad about yourself, feeling that you are a failure, or feeling that you have let yourself or your family down", answer: "" },
    { prompt: "Trouble concentrating on things such as reading the newspaper or watching television", answer: "" },
    { prompt: "Moving or speaking so slowly that other people could have noticed. Or being so fidgety or restless that you have been moving around more than usual", answer: "" },
    { prompt: "Thinking that you would be better off dead or that you want to hurt yourself in some way", answer: "" }
    ];

  unscoredEvaluationResponse: EvaluationResponseDto = {
    prompt: "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
    answer: ""
  };


  constructor(evaluationService: EvaluationService) {
    super(evaluationService);
  }

  ngOnInit() {
  }

  sumResponses(evaluationResponses: EvaluationResponseDto[]): number {
    let total: number = 0;
    for (let evaluationResponse of evaluationResponses) {
      total += +evaluationResponse.answer;
    }

    return total;
  }

  saveEvaluation() {
    this.evaluationDto.evaluationResponses = this.evaluationDto.evaluationResponses.concat(this.scoredEvaluationResponses);
    this.evaluationDto.evaluationResponses.push(this.unscoredEvaluationResponse);
    console.log(this.evaluationDto.evaluationResponses);
    super.saveEvaluation(this.evaluationDto);
  }


}
