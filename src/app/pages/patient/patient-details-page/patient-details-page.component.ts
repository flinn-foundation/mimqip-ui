import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {ActivatedRoute, Params} from "@angular/router";
import {PatientDto} from "../../../swagger/model/PatientDto";
import {Location} from "@angular/common";
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-patient-details-page',
  templateUrl: './patient-details-page.component.html',
  styleUrls: ['./patient-details-page.component.scss'],
  providers: [PatientService]
})
export class PatientDetailsPageComponent implements OnInit {

  private patient: PatientDto;

  private items: MenuItem[];

  private tab: number = 1;

  constructor(private patientService: PatientService, private activatedRoute: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let patientId = params['patientId'];

      if (patientId == null) {
        this.location.go("/about");
      } else {
        this.patientService.patientsIdGet(patientId).subscribe(
          (patient: PatientDto) => this.patient = patient,
          error => console.log(error)
        );
      }
    });

    this.items = [
      {label: 'Patient Evaluations', icon: 'fa-bar-chart', command: () => { this.tab = 1; }},
      {label: 'Medications', icon: 'fa-calendar', command: () => { this.tab = 2; }},
      {label: 'Decision Support', icon: 'fa-book', command: () => { this.tab = 3; }},
      {label: 'Progress Notes', icon: 'fa-support', command: () => { this.tab = 4; }},
      {label: 'Patient Labs', icon: 'fa-twitter', command: () => { this.tab = 5; }},
      {label: 'Patient Information', icon: 'fa-twitter', command: () => { this.tab = 6; }},
      {label: 'Reports', icon: 'fa-twitter', command: () => { this.tab = 7; }}
    ];
  }

}
