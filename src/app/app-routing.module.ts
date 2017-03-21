import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from "./pages/about/about.component";
import {DiagnosisComponent} from "./pages/diagnosis/diagnosis.component";
import {RulesComponent} from "./pages/rules/rules.component";
import {ExportComponent} from "./pages/export/export.component";
import {MessagesComponent} from "./pages/messages/messages.component";
import {SettingsComponent} from "./pages/settings/settings.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'diagnosis', component: DiagnosisComponent },
  { path: 'export', component: ExportComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
