import {Component, Input, OnInit} from '@angular/core';
import {DiagnosisService} from "../../../../services/diagnosis/diagnosis.service";
import {DiagnosisDto} from "../../../../swagger-patient-service/model/DiagnosisDto";
import DiagnosisTypeEnum = DiagnosisDto.DiagnosisTypeEnum;

@Component({
  selector: 'app-patient-diagnosis',
  templateUrl: './patient-diagnosis.component.html',
  styleUrls: ['./patient-diagnosis.component.scss']
})
export class PatientDiagnosisComponent implements OnInit {

  @Input()
  private patientId: number;

  private diagnosis: DiagnosisDto = {};

  private displayDialog: boolean = false;

  private diagnosisMap = new Map<DiagnosisTypeEnum, string>();

  constructor(private diagnosisService: DiagnosisService) {
    diagnosisService.diagnosis$.subscribe(
      diagnosis => {
        this.diagnosis = diagnosis;
      });

    this.diagnosisMap.set(DiagnosisTypeEnum.MDDS1, "296.21 Major Depressive Disorder, Single Episode, Mild");
    this.diagnosisMap.set(DiagnosisTypeEnum.MDDS2, "296.22 Major Depressive Disorder, Single Episode, Moderate");
    this.diagnosisMap.set(DiagnosisTypeEnum.MDDS3, "296.23 Major Depressive Disorder, Single Episode, Severe w/o Psychotic Features");
    this.diagnosisMap.set(DiagnosisTypeEnum.MDDS4, "296.24 Major Depressive Disorder, Single Episode, Severe w/Psychotic Features");
    this.diagnosisMap.set(DiagnosisTypeEnum.MDDR1, "296.31 Major Depressive Disorder, Recurrent, Mild");
    this.diagnosisMap.set(DiagnosisTypeEnum.MDDR2, "296.32 Major Depressive Disorder, Recurrent, Moderate");
    this.diagnosisMap.set(DiagnosisTypeEnum.MDDR3, "296.33 Major Depressive Disorder, Recurrent, Severe w/o Psychotic Features");
    this.diagnosisMap.set(DiagnosisTypeEnum.MDDR4, "296.34 Major Depressive Disorder, Recurrent, Severe w/Psychotic Features");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARSM1, "296.01 Bipolar I Disorder, Single Manic Episode, Mild");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARSM2, "296.02 Bipolar I Disorder, Single Manic Episode, Moderate");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARSM3, "296.03 Bipolar I Disorder, Single Manic Episode, Severe w/o psychotic Features");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARSM4, "296.04 Bipolar I Disorder, Single Manic Episode, Severe w/Psychotic Features");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARMRMH, "296.40 Bipolar I Disorder, Most Recent Episode Hypomanic");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARMRM1, "296.41 Bipolar I Disorder, Most Recent Episode Manic, Mild");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARMRM2, "296.42 Bipolar I Disorder, Most Recent Episode Manic, Moderate");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARMRM3, "296.43 Bipolar I Disorder, Most Recent Episode Manic, Severe w/o Psychotic Features");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARMRM4, "296.44 Bipolar I Disorder, Most Recent Episode Manic, Severe w/Psychotic Features");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARMRD1, "296.51 Bipolar I Disorder, Most Recent Episode Depressed, Mild");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARMRD2, "296.52 Bipolar I Disorder, Most Recent Episode Depressed, Moderate");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARMRD3, "296.53 Bipolar I Disorder, Most Recent Episode Depressed, Severe w/o Psychotic Features");
    this.diagnosisMap.set(DiagnosisTypeEnum.BIPOLARMRD4, "296.54 Bipolar I Disorder, Most Recent Episode Depressed, Severe w/Psychotic Features");
    this.diagnosisMap.set(DiagnosisTypeEnum.SCHIZOPHRENICP, "295.30 Schizophrenia, Paranoid Type");
    this.diagnosisMap.set(DiagnosisTypeEnum.SCHIZOPHRENICD, "295.10 Schizophrenia, Disorganized Type");
    this.diagnosisMap.set(DiagnosisTypeEnum.SCHIZOPHRENICC, "295.20 Schizophrenia, Catatonic Type");
    this.diagnosisMap.set(DiagnosisTypeEnum.SCHIZOPHRENICU, "295.90 Schizophrenia, Undifferentiated Type");
    this.diagnosisMap.set(DiagnosisTypeEnum.SCHIZOPHRENICR, "295.60 Schizophrenia, Residual Type");

  }

  ngOnInit() {
    this.getLatestDiagnosis();
  }

  openDiagnosis() {
    this.displayDialog = true;
  }

  getLatestDiagnosis() {
    this.diagnosisService.getMostRecentDiagnosis(this.patientId).subscribe(
      (diagnosis: DiagnosisDto) => this.diagnosis = diagnosis,
      (error) => console.log(error)
    );
  }

  getDiagnosisLongName(diagnosisType: DiagnosisTypeEnum): string {
    return this.diagnosisMap.get(diagnosisType);
  }



}
