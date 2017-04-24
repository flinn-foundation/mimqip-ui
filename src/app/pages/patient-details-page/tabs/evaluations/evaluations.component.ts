import {Component, Input, OnInit} from '@angular/core';
import {EvaluationDto} from "../../../../swagger-patient-service/model/EvaluationDto";
import EvaluationTypeEnum = EvaluationDto.EvaluationTypeEnum;
import {EvaluationService} from "../../../../services/evaluation/evaluation.service";
import {DiagnosisService} from "../../../../services/diagnosis/diagnosis.service";
import {DiagnosisDto} from "../../../../swagger-patient-service/model/DiagnosisDto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss'],
  providers: [EvaluationService]
})
export class EvaluationsComponent implements OnInit {

  private diagnosis: DiagnosisDto;

  private evaluationTypeEnum = EvaluationTypeEnum;
  private diagnosisRelatedEvaluation: EvaluationTypeEnum;

  // private scaleNameName: Map<string, Array<string>> = new Map([["1", ["test"]], ["2", ["test2"]]]);

  constructor(private diagnosisService: DiagnosisService, private router: Router, private activatedRoute: ActivatedRoute) {
    diagnosisService.diagnosis$.subscribe(
      (diagnosis) => {
        this.diagnosis = diagnosis;
        this.setDiagnosisRelatedEvaluation()
      });
  }

  ngOnInit() {
    this.diagnosisService.getMostRecentDiagnosis().subscribe((diagnosis: DiagnosisDto) => {
        this.diagnosis = diagnosis;
        this.setDiagnosisRelatedEvaluation();
      },
      (error) => {
        console.log(error)
      })
  }

  private setDiagnosisRelatedEvaluation() {

    let diagnosisRelatedEvaluation: EvaluationTypeEnum;
    if (this.diagnosis != null) {
      let diagnosisName: string = this.diagnosis.diagnosisType.toString().toUpperCase();


      if (diagnosisName.indexOf("SCHIZOPHRENIC") > -1) {
        diagnosisRelatedEvaluation = EvaluationTypeEnum.PSRS;
      } else if (diagnosisName.indexOf("BIPOLAR") > -1) {
        diagnosisRelatedEvaluation = EvaluationTypeEnum.BBDSS;
      } else if (diagnosisName.indexOf("MDD") > -1) {
        diagnosisRelatedEvaluation = EvaluationTypeEnum.PHQ9;
      } else {
        diagnosisRelatedEvaluation = null;
      }
    }

    this.changeActiveEvaluationIfDiagnosisChanges();

    this.diagnosisRelatedEvaluation = diagnosisRelatedEvaluation;

    console.log(this.diagnosisRelatedEvaluation);
  }

  private changeActiveEvaluationIfDiagnosisChanges() {

    let childrenRoutes: ActivatedRoute[] = this.activatedRoute.children;
    if (childrenRoutes.length == 1) {
      let activeChildRoute: ActivatedRoute = childrenRoutes[0];
      activeChildRoute.url.subscribe((url) => {
        if (url.length == 1) {
          if (['psrs', 'bbdss', 'phq9'].includes(url[0].path)) {
            this.router.navigate(['global'], {
              preserveQueryParams: true,
              skipLocationChange: true,
              relativeTo: this.activatedRoute
            });
          }
        }
      });
    }
  }
}
