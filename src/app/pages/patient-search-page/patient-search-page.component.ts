import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient/patient.service";
import {PatientDto} from "../../swagger-patient-service/model/PatientDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-search-page',
  templateUrl: './patient-search-page.component.html',
  styleUrls: ['./patient-search-page.component.scss']
})
export class PatientSearchPageComponent implements OnInit {

  private patients: PatientDto[];

  constructor(private patientService: PatientService, private router: Router) {
  }

  ngOnInit() {
    this.patientService.getPatientsSimple().subscribe(
      (patients:PatientDto[]) => this.patients = patients,
      error => console.log(error)
    );
  }

  onRowSelect(event) {
    this.router.navigate(['/patient/details'], { queryParams: { patientId: event.data.id }});
  }
}
