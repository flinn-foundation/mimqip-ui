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

  selectedMajorDiagnosis: string;

  majorDiagnosisTypes: string[] = ["MDD", "SCHIZOPHRENIC", "BIPOLAR"];

  constructor(private diagnosisService: DiagnosisService, private router: Router, private activatedRoute: ActivatedRoute) {
    diagnosisService.diagnosis$.subscribe((diagnosis) => this.setDiagnosisRelatedEvaluation(diagnosis));
  }

  ngOnInit() {
    this.diagnosisService.getMostRecentDiagnosis().subscribe(
      (diagnosis: DiagnosisDto) => this.setDiagnosisRelatedEvaluation(diagnosis),
      (error) => console.log(error))
  }

  private setDiagnosisRelatedEvaluation(diagnosis: DiagnosisDto) {

    if (diagnosis != null) {
      let updatedMajorDiagnosis: string;
      let diagnosisName: string = diagnosis.diagnosisType.toString().toUpperCase();

      for (let majorDiagnosis of this.majorDiagnosisTypes) {
        if (diagnosisName.indexOf(majorDiagnosis) > -1) {
          updatedMajorDiagnosis = majorDiagnosis;
        }
      }

      if (this.selectedMajorDiagnosis != updatedMajorDiagnosis) {
        this.changeActiveEvaluationIfDiagnosisChanges(updatedMajorDiagnosis);
      }

      this.selectedMajorDiagnosis = updatedMajorDiagnosis;
    }
  }

  private changeActiveEvaluationIfDiagnosisChanges(updatedDiagnosisUrl: string) {

    let childrenRoutes: ActivatedRoute[] = this.activatedRoute.children;
    if (childrenRoutes.length == 1) {
      let activeChildRoute: ActivatedRoute = childrenRoutes[0];
      activeChildRoute.url.subscribe((url) => {
        if (url.length == 1) {
          if (this.majorDiagnosisTypes.includes(url[0].path.toUpperCase())) {
            this.router.navigate([updatedDiagnosisUrl.toLowerCase()], {
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
