import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {DataTableModule, SharedModule} from 'primeng/primeng';
import {TabMenuModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';

import {NgPipesModule} from "angular2-pipes";


import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {PatientSearchPageComponent} from './pages/patient-search-page/patient-search-page.component';
import {PatientDetailsPageComponent} from './pages/patient-details-page/patient-details-page.component';
import {PatientCreationPageComponent} from './pages/patient-creation-page/patient-creation-page.component';
import {PatientInformationComponent} from './pages/patient-details-page/boxes/patient-information/patient-information.component';
import {PatientDiagnosisComponent} from './pages/patient-details-page/boxes/patient-diagnosis/patient-diagnosis.component';
import {CurrentMediciationsComponent} from './pages/patient-details-page/boxes/current-mediciations/current-mediciations.component';
import {ProgressNotesComponent} from './pages/patient-details-page/boxes/progress-notes/progress-notes.component';
import {EvaluationsComponent} from './pages/patient-details-page/tabs/evaluations/evaluations.component';
import {MedicationsComponent} from './pages/patient-details-page/tabs/medications/medications.component';
import {RecommendationsComponent} from './pages/patient-details-page/tabs/recommendations/recommendations.component';
import {ProgressComponent} from './pages/patient-details-page/tabs/progress/progress.component';
import {LabsComponent} from './pages/patient-details-page/tabs/labs/labs.component';
import {InformationComponent} from './pages/patient-details-page/tabs/information/information.component';
import {ReportsComponent} from './pages/patient-details-page/tabs/reports/reports.component';
import {NewProgressNoteComponent} from './pages/patient-details-page/boxes/progress-notes/new-progress-note/new-progress-note.component';
import {InstructionsComponent} from './pages/patient-details-page/instructions/instructions.component';
import {DepressionPhq9Component} from './pages/patient-details-page/tabs/evaluations/depression-phq9/depression-phq9.component';
import {PsychiatricComponent} from './pages/patient-details-page/tabs/evaluations/psychiatric/psychiatric.component';
import {SubstanceAbuseComponent} from './pages/patient-details-page/tabs/evaluations/substance-abuse/substance-abuse.component';
import {MentalStatusComponent} from './pages/patient-details-page/tabs/evaluations/mental-status/mental-status.component';
import {VitalSignsComponent} from './pages/patient-details-page/tabs/evaluations/vital-signs/vital-signs.component';
import {GlobalRatingsComponent} from './pages/patient-details-page/tabs/evaluations/global-ratings/global-ratings.component';
import {BipolarBbdssComponent} from './pages/patient-details-page/tabs/evaluations/bipolar-bbdss/bipolar-bbdss.component';
import {SchizophreniaPsrsComponent} from './pages/patient-details-page/tabs/evaluations/schizophrenia-psrs/schizophrenia-psrs.component';
import {SumImpurePipe} from './pipes/sum-impure/sum-impure.pipe';
import {SexShortPipe} from './pipes/sex-short/sex-short.pipe';
import { CompareTreatmentsDialogComponent } from './pages/patient-details-page/tabs/recommendations/compare-treatments-dialog/compare-treatments-dialog.component';
import { DiagnosisDialogComponent } from './pages/patient-details-page/boxes/patient-diagnosis/diagnosis-dialog/diagnosis-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PatientSearchPageComponent,
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
    InstructionsComponent,
    DepressionPhq9Component,
    PsychiatricComponent,
    SubstanceAbuseComponent,
    MentalStatusComponent,
    VitalSignsComponent,
    GlobalRatingsComponent,
    BipolarBbdssComponent,
    SchizophreniaPsrsComponent,
    SumImpurePipe,
    SexShortPipe,
    CompareTreatmentsDialogComponent,
    DiagnosisDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    TabMenuModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule,
    DialogModule,
    SharedModule,
    NgPipesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
