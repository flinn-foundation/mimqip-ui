import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {DataTableModule,SharedModule} from 'primeng/primeng';
import {TabMenuModule} from 'primeng/primeng';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/recommend/about-page/about-page.component';
import { RulesPageComponent } from './pages/recommend/rules-page/rules-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { MessagesPageComponent } from './pages/recommend/messages-page/messages-page.component';
import { ExportComponent } from './pages/recommend/export/export.component';
import { SettingsPageComponent } from './pages/recommend/settings-page/settings-page.component';
import { DiagnosisPageComponent } from './pages/recommend/diagnosis-page/diagnosis-page.component';
import { DiagnosisDetailsPageComponent } from './pages/recommend/diagnosis-page/diagnosis-details-page/diagnosis-details-page.component';
import { SettingsDetailsComponent } from './pages/recommend/settings-page/settings-details/settings-details.component';
import { RuleDetailsComponent } from './pages/recommend/rules-page/rule-details/rule-details.component';
import { MessageDetailsPageComponent } from './pages/recommend/messages-page/message-details-page/message-details-page.component';
import { PatientSearchPageComponent } from './pages/patient/patient-search-page/patient-search-page.component';
import { NewPatientFormComponent } from './shared/new-patient-form/new-patient-form.component';
import { PatientDetailsPageComponent } from './pages/patient/patient-details-page/patient-details-page.component';
import { PatientCreationPageComponent } from './pages/patient/patient-creation-page/patient-creation-page.component';
import { PatientInformationComponent } from './pages/patient/patient-details-page/boxes/patient-information/patient-information.component';
import { PatientDiagnosisComponent } from './pages/patient/patient-details-page/boxes/patient-diagnosis/patient-diagnosis.component';
import { CurrentMediciationsComponent } from './pages/patient/patient-details-page/boxes/current-mediciations/current-mediciations.component';
import { ProgressNotesComponent } from './pages/patient/patient-details-page/boxes/progress-notes/progress-notes.component';
import { EvaluationsComponent } from './pages/patient/patient-details-page/tabs/evaluations/evaluations.component';
import { MedicationsComponent } from './pages/patient/patient-details-page/tabs/medications/medications.component';
import { RecommendationsComponent } from './pages/patient/patient-details-page/tabs/recommendations/recommendations.component';
import { ProgressComponent } from './pages/patient/patient-details-page/tabs/progress/progress.component';
import { LabsComponent } from './pages/patient/patient-details-page/tabs/labs/labs.component';
import { InformationComponent } from './pages/patient/patient-details-page/tabs/information/information.component';
import { ReportsComponent } from './pages/patient/patient-details-page/tabs/reports/reports.component';
import { NewProgressNoteComponent } from './pages/patient/patient-details-page/boxes/new-progress-note/new-progress-note.component';
import { InstructionsComponent } from './pages/patient/patient-details-page/tabs/instructions/instructions.component';


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
    PatientCreationPageComponent,
    PatientInformationComponent,
    PatientDiagnosisComponent,
    CurrentMediciationsComponent,
    ProgressNotesComponent,
    EvaluationsComponent,
    MedicationsComponent,
    RecommendationsComponent,
    ProgressComponent,
    LabsComponent,
    InformationComponent,
    ReportsComponent,
    NewProgressNoteComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    TabMenuModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
