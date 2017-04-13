import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PatientDto} from "../../../swagger/model/PatientDto";
import {Location} from "@angular/common";
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-patient-details-page',
  templateUrl: './patient-details-page.component.html',
  styleUrls: ['./patient-details-page.component.scss']
})
export class PatientDetailsPageComponent implements OnInit {

  private patientId: number;
  private items: MenuItem[];


  private tab: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.patientId = params['patientId'];
      if (this.patientId == null) {
        this.router.navigate(["/patient/search"]);
      }
    });

    this.items = [
      {label: 'Patient Evaluations', command: () => { this.tab = 1; }},
      {label: 'Medications', command: () => { this.tab = 2; }},
      {label: 'Decision Support', command: () => { this.tab = 3; }},
      {label: 'Progress Notes', command: () => { this.tab = 4; }},
      {label: 'Patient Labs', command: () => { this.tab = 5; }},
      {label: 'Patient Information', command: () => { this.tab = 6; }},
      {label: 'Reports', command: () => { this.tab = 7; }}
    ];
  }

}
