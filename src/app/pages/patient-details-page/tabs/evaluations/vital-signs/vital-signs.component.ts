import {Component, OnInit} from '@angular/core';
import {SelectItem} from "primeng/primeng";
import {VitalSignsDto} from "../../../../../swagger-patient-service/model/VitalSignsDto";
import {EvaluationService} from "../../../../../services/evaluation/evaluation.service";

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.scss']
})
export class VitalSignsComponent implements OnInit {

  feetSelectItems: SelectItem[] = [];
  inchesSelectItems: SelectItem[] = [];

  vitalSigns: VitalSignsDto = {bloodPressure: {}};

  selectedFeet: number;
  selectedInches: number;

  constructor(private evaluationService: EvaluationService) {
  }

  ngOnInit() {
    this.feetSelectItems.push({label: "Select", value: null});
    for (let i = 1; i < 8; i++) {
      this.feetSelectItems.push({label: i.toString(), value: i});
    }

    this.inchesSelectItems.push({label: "Select", value: null});
    for (let i = 0; i < 12; i++) {
      this.inchesSelectItems.push({label: i.toString(), value: i});
    }
  }

  saveVitals() {
    this.vitalSigns.height = this.calculateHeightInInches();

    this.evaluationService.createNewVitalSignEvaluation(this.vitalSigns).subscribe(
      (vitalsId: string) => console.log(vitalsId),
      (error) => console.log(error)
    );
  }

  private calculateHeightInInches(): number {
    return (this.selectedFeet * 12) + this.selectedInches;
  }

  calculateBmi(weightInLbs: number, heightInFeet: number, remainingHeightInInches: number) {

    if(weightInLbs && heightInFeet && remainingHeightInInches) {
      let heightInMeters: number = this.calculateHeightInInches() * .025;
      let weightInKg: number = this.vitalSigns.weight * .45;

      let heightSquared: number = heightInMeters * heightInMeters;

      return weightInKg / heightSquared;
    } else {
      return -1;
    }
  }

}
