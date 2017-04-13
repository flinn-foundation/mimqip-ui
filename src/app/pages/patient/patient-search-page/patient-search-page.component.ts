import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../services/patient.service";
import {PatientDto} from "../../../swagger/model/PatientDto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-patient-search-page',
  templateUrl: './patient-search-page.component.html',
  styleUrls: ['./patient-search-page.component.scss'],
  providers: [PatientService]
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
    this.router.navigate(['/patient/details'], { queryParams: { patientId: event.data.id }})

  }
}
