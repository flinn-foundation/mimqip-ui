import {Component, Input, OnInit} from '@angular/core';
import {DiagnosisService} from "../../../../services/diagnosis/diagnosis.service";
import {DiagnosisDto} from "../../../../swagger/model/DiagnosisDto";

@Component({
  selector: 'app-patient-diagnosis',
  templateUrl: './patient-diagnosis.component.html',
  styleUrls: ['./patient-diagnosis.component.scss'],
  providers: [DiagnosisService]
})
export class PatientDiagnosisComponent implements OnInit {

  @Input()
  private patientId: number;

  private diagnosis: DiagnosisDto = {};

  private displayDialog: boolean = false;

  constructor(private diagnosisService: DiagnosisService) { }

  ngOnInit() {
    this.getLatestDiagnosis();
  }

  openDiagnosis() {
    this.displayDialog = true;
  }

  getLatestDiagnosis() {
    console.log("Getting fresh diagnosis");
    this.diagnosisService.getMostRecentDiagnosisByPatientId(this.patientId).subscribe(
      (diagnosis:DiagnosisDto) => this.diagnosis = diagnosis,
      (error) => console.log(error)
    );
  }

}
