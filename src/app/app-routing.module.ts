import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AboutPageComponent} from "./pages/recommend/about/about-page.component";
import {DiagnosisComponent} from "./pages/recommend/diagnosis/diagnosis.component";
import {RulesComponent} from "./pages/recommend/rules/rules.component";
import {ExportComponent} from "./pages/recommend/export/export.component";
import {MessagesComponent} from "./pages/recommend/messages/messages.component";
import {SettingsComponent} from "./pages/recommend/settings/settings.component";
import {PatientDetailsPageComponent} from "./pages/patient/patient-details-page/patient-details-page.component";
import {PatientCreationPageComponent} from "./pages/patient/patient-creation-page/patient-creation-page.component";
import {PatientSearchPageComponent} from "./pages/patient/patient-search-page/patient-search-page.component";


const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'diagnosis', component: DiagnosisComponent },
  { path: 'export', component: ExportComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'patient/details', component: PatientDetailsPageComponent },
  { path: 'patient/create', component: PatientCreationPageComponent },
  { path: 'patient/search', component: PatientSearchPageComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
