import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/recommend/about-page/about-page.component';
import { RulesPageComponent } from './pages/recommend/rules-page/rules-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MessagesPageComponent } from './pages/recommend/messages-page/messages-page.component';
import { ExportComponent } from './pages/recommend/export/export.component';
import { SettingsPageComponent } from './pages/recommend/settings-page/settings-page.component';
import { DiagnosisPageComponent } from './pages/recommend/diagnosis-page/diagnosis-page.component';
import { DiagnosisDetailsPageComponent } from './pages/recommend/diagnosis-page/diagnosis-details-page/diagnosis-details-page.component';
import { SettingsDetailsComponent } from './pages/recommend/settings-page/settings-details/settings-details.component';
import { RuleDetailsComponent } from './pages/recommend/rules-page/rule-details/rule-details.component';
import { MessageDetailsPageComponent } from './pages/recommend/messages-page/message-details-page/message-details-page.component';
import { PatientSearchPageComponent } from './pages/patient/patient-search-page/patient-search-page.component';
import { NewPatientFormComponent } from './components/new-patient-form/new-patient-form.component';
import { PatientDetailsPageComponent } from './pages/patient/patient-details-page/patient-details-page.component';
import { PatientCreationPageComponent } from './pages/patient/patient-creation-page/patient-creation-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    RulesPageComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MessagesPageComponent,
    ExportComponent,
    SettingsPageComponent,
    DiagnosisPageComponent,
    SettingsDetailsComponent,
    DiagnosisDetailsPageComponent,
    RuleDetailsComponent,
    MessageDetailsPageComponent,
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
