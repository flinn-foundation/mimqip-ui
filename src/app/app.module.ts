import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/recommend/about/about-page.component';
import { RulesComponent } from './pages/recommend/rules/rules.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MessagesComponent } from './pages/recommend/messages/messages.component';
import { ExportComponent } from './pages/recommend/export/export.component';
import { SettingsComponent } from './pages/recommend/settings/settings.component';
import { DiagnosisComponent } from './pages/recommend/diagnosis/diagnosis.component';
import { DiagnosisDetailsComponent } from './pages/recommend/diagnosis/diagnosis-details/diagnosis-details.component';
import { SettingsDetailsComponent } from './pages/recommend/settings/settings-details/settings-details.component';
import { RuleDetailsComponent } from './pages/recommend/rules/rule-details/rule-details.component';
import { MessageDetailsComponent } from './pages/recommend/messages/message-details/message-details.component';
import { PatientSearchPageComponent } from './pages/patient/patient-search-page/patient-search-page.component';
import { NewPatientFormComponent } from './components/new-patient-form/new-patient-form.component';
import { PatientDetailsPageComponent } from './pages/patient/patient-details-page/patient-details-page.component';
import { PatientCreationPageComponent } from './pages/patient/patient-creation-page/patient-creation-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    RulesComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MessagesComponent,
    ExportComponent,
    SettingsComponent,
    DiagnosisComponent,
    SettingsDetailsComponent,
    DiagnosisDetailsComponent,
    RuleDetailsComponent,
    MessageDetailsComponent,
    PatientSearchPageComponent,
    NewPatientFormComponent,
    PatientDetailsPageComponent,
    PatientCreationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
