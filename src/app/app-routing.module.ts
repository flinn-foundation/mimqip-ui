import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PatientDetailsPageComponent} from "./pages/patient-details-page/patient-details-page.component";
import {PatientCreationPageComponent} from "./pages/patient-creation-page/patient-creation-page.component";
import {PatientSearchPageComponent} from "./pages/patient-search-page/patient-search-page.component";


const routes: Routes = [
  { path: 'patient/details', component: PatientDetailsPageComponent },
  { path: 'patient/create', component: PatientCreationPageComponent },
  { path: 'patient/search', component: PatientSearchPageComponent },
  { path: '', redirectTo: 'patient/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
