import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PatientDetailsPageComponent} from "./pages/patient-details-page/patient-details-page.component";
import {PatientCreationPageComponent} from "./pages/patient-creation-page/patient-creation-page.component";
import {PatientSearchPageComponent} from "./pages/patient-search-page/patient-search-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthGuard} from "./guards/auth-guard/auth.guard";
import {PatientRootComponent} from "./pages/patient-root/patient-root.component";
import {EvaluationsComponent} from "./pages/patient-details-page/tabs/evaluations/evaluations.component";
import {MedicationsComponent} from "./pages/patient-details-page/tabs/medications/medications.component";
import {RecommendationsComponent} from "./pages/patient-details-page/tabs/recommendations/recommendations.component";
import {ReportsComponent} from "./pages/patient-details-page/tabs/reports/reports.component";
import {LabsComponent} from "./pages/patient-details-page/tabs/labs/labs.component";
import {ProgressComponent} from "./pages/patient-details-page/tabs/progress/progress.component";
import {InformationComponent} from "./pages/patient-details-page/tabs/patient-information-input/patient-information-input.component";
import {GlobalRatingsComponent} from "./pages/patient-details-page/tabs/evaluations/global-ratings/global-ratings.component";
import {BipolarBbdssComponent} from "./pages/patient-details-page/tabs/evaluations/bipolar-bbdss/bipolar-bbdss.component";
import {DepressionPhq9Component} from "./pages/patient-details-page/tabs/evaluations/depression-phq9/depression-phq9.component";
import {SchizophreniaComponent} from "./pages/patient-details-page/tabs/evaluations/schizophrenia/schizophrenia.component";
import {PsychiatricComponent} from "./pages/patient-details-page/tabs/evaluations/psychiatric/psychiatric.component";
import {MentalStatusComponent} from "./pages/patient-details-page/tabs/evaluations/mental-status/mental-status.component";
import {SubstanceAbuseComponent} from "./pages/patient-details-page/tabs/evaluations/substance-abuse/substance-abuse.component";
import {VitalSignsComponent} from "./pages/patient-details-page/tabs/evaluations/vital-signs/vital-signs.component";
import {EvaluationSuccessComponent} from "./pages/patient-details-page/tabs/evaluations/evaluation-success/evaluation-success.component";


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {
    path: 'patient', component: PatientRootComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'details', component: PatientDetailsPageComponent,
        children: [
          {
            path: "evaluations", component: EvaluationsComponent,
            children: [
              {path: "global", component: GlobalRatingsComponent},
              {path: "bipolar", component: BipolarBbdssComponent},
              {path: "mdd", component: DepressionPhq9Component},
              {path: "schizophrenic", component: SchizophreniaComponent},
              {path: "psychiatric", component: PsychiatricComponent},
              {path: "mental-status", component: MentalStatusComponent},
              {path: "substance-abuse", component: SubstanceAbuseComponent},
              {path: "vital-signs", component: VitalSignsComponent},
              {path: 'success', component: EvaluationSuccessComponent}
            ]
          },
          {path: "medications", component: MedicationsComponent},
          {path: "recommendations", component: RecommendationsComponent},
          {path: "progress-notes", component: ProgressComponent},
          {path: "labs", component: LabsComponent},
          {path: "patient-information", component: InformationComponent},
          {path: "reports", component: ReportsComponent}
        ]
      },
      {path: 'create', component: PatientCreationPageComponent},
      {path: 'search', component: PatientSearchPageComponent},
      {path: '', redirectTo: 'search', pathMatch: 'full'}
    ]
  },
  {path: '', redirectTo: 'patient/search', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
