import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MenuItem} from "primeng/primeng";
import {PatientService} from "../../services/patient/patient.service";
import {DiagnosisService} from "../../services/diagnosis/diagnosis.service";

@Component({
  selector: 'app-patient-details-page',
  templateUrl: './patient-details-page.component.html',
  styleUrls: ['./patient-details-page.component.scss'],
  providers: [DiagnosisService]
})
export class PatientDetailsPageComponent implements OnInit {

  private patientId: number;
  private items: MenuItem[];
  private activeItem: MenuItem;


  constructor(private patientService: PatientService, private activatedRoute: ActivatedRoute, private router: Router, private diagnosisService: DiagnosisService) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.patientId = params['patientId'];
      if (this.patientId == null) {
        this.router.navigate(["/patient/search"]);
      } else {
        this.patientService.setPatientId(this.patientId);
        this.switchTabs("evaluations");
      }
    });

    this.items = [
      {label: 'Patient Evaluations', command: () => {this.switchTabs("evaluations")}},
      {label: 'Medications', command: () => { this.switchTabs("medications") }},
      {label: 'Decision Support', command: () => { this.switchTabs("recommendations") }},
      {label: 'Progress Notes', command: () => { this.switchTabs("progress-notes") }},
      {label: 'Patient Labs', command: () => { this.switchTabs("labs") }},
      {label: 'Patient Information', command: () => { this.switchTabs("patient-information") }},
      {label: 'Reports', command: () => { this.switchTabs("reports") }}
    ];

    this.activeItem = this.items[0];
  }

  private switchTabs(route: string) {
      this.router.navigate([route], {preserveQueryParams: true, relativeTo: this.activatedRoute, skipLocationChange: true});
  }



}
