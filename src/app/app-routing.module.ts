import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AboutPageComponent} from "./pages/recommend/about-page/about-page.component";
import {DiagnosisPageComponent} from "./pages/recommend/diagnosis-page/diagnosis-page.component";
import {RulesPageComponent} from "./pages/recommend/rules-page/rules-page.component";
import {ExportComponent} from "./pages/recommend/export/export.component";
import {MessagesPageComponent} from "./pages/recommend/messages-page/messages-page.component";
import {SettingsPageComponent} from "./pages/recommend/settings-page/settings-page.component";
import {PatientDetailsPageComponent} from "./pages/patient/patient-details-page/patient-details-page.component";
import {PatientCreationPageComponent} from "./pages/patient/patient-creation-page/patient-creation-page.component";
import {PatientSearchPageComponent} from "./pages/patient/patient-search-page/patient-search-page.component";


const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'diagnosis', component: DiagnosisPageComponent },
  { path: 'export', component: ExportComponent },
  { path: 'messages', component: MessagesPageComponent },
  { path: 'rules', component: RulesPageComponent },
  { path: 'settings', component: SettingsPageComponent },
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
