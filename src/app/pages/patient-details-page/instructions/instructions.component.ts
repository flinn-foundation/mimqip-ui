import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  private showInstructions: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleInstructions(): void {
    this.showInstructions = !this.showInstructions;
  }

  buttonText(): string {
    if (this.showInstructions) {
      return "Hide";
    } else {
      return "Show";
    }
  }

  updateDiagnosis() {
    console.log('clicked diagnosis');
  }

  viewMedications() {
    console.log('clicked medications');
  }

  updateDiagnosisScales() {
    console.log('clicked diagnosis scales');
  }

  updateGlobalScales() {
    console.log('clicked global scales');
  }

}
