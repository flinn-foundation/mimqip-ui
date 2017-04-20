import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PatientDetailsPageComponent} from "./pages/patient-details-page/patient-details-page.component";
import {PatientCreationPageComponent} from "./pages/patient-creation-page/patient-creation-page.component";
import {PatientSearchPageComponent} from "./pages/patient-search-page/patient-search-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {AuthGuard} from "./guards/auth-guard/auth.guard";
import {PatientRootComponent} from "./pages/patient-root/patient-root.component";


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'patient', component: PatientRootComponent, canActivate: [AuthGuard],
    children: [
      { path: 'details', component: PatientDetailsPageComponent },
      { path: 'create', component: PatientCreationPageComponent },
      { path: 'search', component: PatientSearchPageComponent },
      { path: '', redirectTo: 'search', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'patient/search', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
