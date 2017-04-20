import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {SelectItem} from "primeng/primeng";
import {DiagnosisDto} from "../../../../../swagger-patient-service/model/DiagnosisDto";
import DiagnosisTypeEnum = DiagnosisDto.DiagnosisTypeEnum;
import {DiagnosisService} from "../../../../../services/diagnosis/diagnosis.service";

@Component({
  selector: 'app-diagnosis-dialog',
  templateUrl: './diagnosis-dialog.component.html',
  styleUrls: ['./diagnosis-dialog.component.scss']
})
export class DiagnosisDialogComponent implements OnInit, OnChanges {

  @Input()
  private display: boolean;

  @Input()
  private patientId: number;

  @Output()
  private displayChange = new EventEmitter<boolean>();

  private diagnosis: DiagnosisDto = {secondaryDiagnosis: "", stage: 1};
  private diagnosisOriginal: DiagnosisDto;

  private diagnoses: SelectItem[] = [
    {label: "296.21 Major Depressive Disorder, Single Episode, Mild", value: DiagnosisTypeEnum.MDDS1},
    {label: "296.22 Major Depressive Disorder, Single Episode, Moderate", value: DiagnosisTypeEnum.MDDS2},
    {
      label: "296.23 Major Depressive Disorder, Single Episode, Severe w/o Psychotic Features",
      value: DiagnosisTypeEnum.MDDS3
    },
    {
      label: "296.24 Major Depressive Disorder, Single Episode, Severe w/Psychotic Features",
      value: DiagnosisTypeEnum.MDDS4
    },
    {label: "296.31 Major Depressive Disorder, Recurrent, Mild", value: DiagnosisTypeEnum.MDDR1},
    {label: "296.32 Major Depressive Disorder, Recurrent, Moderate", value: DiagnosisTypeEnum.MDDR2},
    {
      label: "296.33 Major Depressive Disorder, Recurrent, Severe w/o Psychotic Features",
      value: DiagnosisTypeEnum.MDDR3
    },
    {label: "296.34 Major Depressive Disorder, Recurrent, Severe w/Psychotic Features", value: DiagnosisTypeEnum.MDDR4},
    {label: "296.01 Bipolar I Disorder, Single Manic Episode, Mild", value: DiagnosisTypeEnum.BIPOLARSM1},
    {label: "296.02 Bipolar I Disorder, Single Manic Episode, Moderate", value: DiagnosisTypeEnum.BIPOLARSM2},
    {
      label: "296.03 Bipolar I Disorder, Single Manic Episode, Severe w/o psychotic Features",
      value: DiagnosisTypeEnum.BIPOLARSM3
    },
    {
      label: "296.04 Bipolar I Disorder, Single Manic Episode, Severe w/Psychotic Features",
      value: DiagnosisTypeEnum.BIPOLARSM4
    },
    {label: "296.40 Bipolar I Disorder, Most Recent Episode Hypomanic", value: DiagnosisTypeEnum.BIPOLARMRMH},
    {label: "296.41 Bipolar I Disorder, Most Recent Episode Manic, Mild", value: DiagnosisTypeEnum.BIPOLARMRM1},
    {label: "296.42 Bipolar I Disorder, Most Recent Episode Manic, Moderate", value: DiagnosisTypeEnum.BIPOLARMRM2},
    {
      label: "296.43 Bipolar I Disorder, Most Recent Episode Manic, Severe w/o Psychotic Features",
      value: DiagnosisTypeEnum.BIPOLARMRM3
    },
    {
      label: "296.44 Bipolar I Disorder, Most Recent Episode Manic, Severe w/Psychotic Features",
      value: DiagnosisTypeEnum.BIPOLARMRM4
    },
    {label: "296.51 Bipolar I Disorder, Most Recent Episode Depressed, Mild", value: DiagnosisTypeEnum.BIPOLARMRD1},
    {label: "296.52 Bipolar I Disorder, Most Recent Episode Depressed, Moderate", value: DiagnosisTypeEnum.BIPOLARMRD2},
    {
      label: "296.53 Bipolar I Disorder, Most Recent Episode Depressed, Severe w/o Psychotic Features",
      value: DiagnosisTypeEnum.BIPOLARMRD3
    },
    {
      label: "296.54 Bipolar I Disorder, Most Recent Episode Depressed, Severe w/Psychotic Features",
      value: DiagnosisTypeEnum.BIPOLARMRD4
    },
    {label: "295.30 Schizophrenia, Paranoid Type", value: DiagnosisTypeEnum.SCHIZOPHRENICP},
    {label: "295.10 Schizophrenia, Disorganized Type", value: DiagnosisTypeEnum.SCHIZOPHRENICD},
    {label: "295.20 Schizophrenia, Catatonic Type", value: DiagnosisTypeEnum.SCHIZOPHRENICC},
    {label: "295.90 Schizophrenia, Undifferentiated Type", value: DiagnosisTypeEnum.SCHIZOPHRENICU},
    {label: "295.60 Schizophrenia, Residual Type", value: DiagnosisTypeEnum.SCHIZOPHRENICR},
    {label: "Other", value: null}
  ];

  private stages: SelectItem[] = [
    {label: "1", value: 1},
    {label: "2", value: 2},
    {label: "3", value: 3},
    {label: "4", value: 4}
  ];


  constructor(private diagnosisService: DiagnosisService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.display === true) {
      this.diagnosisService.getMostRecentDiagnosisByPatientId(this.patientId).subscribe(
        (diagnosis: DiagnosisDto) => {
          this.diagnosis = {
            diagnosisType: diagnosis.diagnosisType,
            secondaryDiagnosis: diagnosis.secondaryDiagnosis,
            stage: diagnosis.stage
          };
          this.diagnosisOriginal = diagnosis;
        },
        (error) => console.log(error)
      );
    }
  }

  emitHide() {
    this.displayChange.emit(false);
  }

  // emitUpdated() {
  //   this.diagnosisUpdated.emit();
  // }

  saveDiagnosis() {
    this.diagnosis.id = null;
    if (this.diagnosisChanged()) {
      console.log("Different");
      this.diagnosisService.savePatientDiagnosis(this.patientId, this.diagnosis).subscribe(() => this.diagnosisService.submitDiagnosis(this.diagnosis), () => console.log("Error submitting diagnosis"));
      this.emitHide();
    } else {
      this.emitHide();
    }
  }

  private diagnosisChanged(): boolean {
    let diagnosesDiffer = false;
    if (this.diagnosisOriginal == null) {
      diagnosesDiffer = true;
    } else {
      if (this.diagnosis.diagnosisType !== this.diagnosisOriginal.diagnosisType) {
        diagnosesDiffer = true;
      } else if (this.secondaryDiagnosisDiffer()) {
        diagnosesDiffer = true;
      } else if (this.diagnosis.stage !== this.diagnosisOriginal.stage) {
        diagnosesDiffer = true;
      }
    }

    return diagnosesDiffer;
  }

  private secondaryDiagnosisDiffer(): boolean {

    if (this.diagnosis.secondaryDiagnosis == null && this.diagnosisOriginal.secondaryDiagnosis == null) {
      return false;
    } else {
      if (this.diagnosis.secondaryDiagnosis == null && this.diagnosisOriginal.secondaryDiagnosis != null) {
        return true;
      } else if (this.diagnosis.secondaryDiagnosis != null && this.diagnosisOriginal.secondaryDiagnosis == null) {
        return true;
      } else if (this.diagnosis.secondaryDiagnosis.trim() !== this.diagnosisOriginal.secondaryDiagnosis.trim()) {
        return true;
      }
    }

    return false;
  }

}
