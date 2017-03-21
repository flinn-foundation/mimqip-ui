import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { RulesComponent } from './pages/rules/rules.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ExportComponent } from './pages/export/export.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DiagnosisComponent } from './pages/diagnosis/diagnosis.component';
import { DetailsComponent } from './pages/settings/details/details.component';
import { DiagnosisDetailsComponent } from './pages/diagnosis/diagnosis-details/diagnosis-details.component';
import { SettingsDetailsComponent } from './pages/settings/settings-details/settings-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RulesComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MessagesComponent,
    ExportComponent,
    SettingsComponent,
    DiagnosisComponent,
    SettingsDetailsComponent,
    DiagnosisDetailsComponent
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
