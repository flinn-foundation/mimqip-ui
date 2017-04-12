import {Component, OnInit} from "@angular/core";
import {PatientService} from "../../../services/patient.service";
import {PatientDto} from "../../../swagger/model/PatientDto";
import {SelectItem} from "primeng/primeng";
import RaceEnum = PatientDto.RaceEnum;
import EthnicityEnum = PatientDto.EthnicityEnum;
import EmploymentEnum = PatientDto.EmploymentEnum;
import SexEnum = PatientDto.SexEnum;
import MaritalEnum = PatientDto.MaritalEnum;
import LivingEnum = PatientDto.LivingEnum;

@Component({
  selector: 'app-patient-creation-page',
  templateUrl: './patient-creation-page.component.html',
  styleUrls: ['./patient-creation-page.component.scss'],
  providers: [PatientService]
})
export class PatientCreationPageComponent implements OnInit {

  private patient: PatientDto = {};

  private defaultDate: Date;

  private yearRange: string = (new Date().getFullYear() - 120) + ':' + (new Date().getFullYear() - 5);

  private selectedRaces: RaceEnum[] = [];

  private raceOptions = [
    {label: "White", value: RaceEnum.WHITE},
    {label: "African-American, Black", value: RaceEnum.BLACK},
    {label: "American Indian", value: RaceEnum.AMERICANINDIAN},
    {label: "Asian (Indian, Chinese, Filipino, Japanese, Korean, or other)", value: RaceEnum.ASIAN},
    {label: "Pacific Islander (Hawaiian, Samoan, or other)", value: RaceEnum.PACIFICISLANDER},
    {label: "No response", value: RaceEnum.NORESPONSE}
  ];

  private ethnicityOptions = [
    {label: "Hispanic, Latino or Spanish", value: EthnicityEnum.HISPANIC},
    {label: "Non Hispanic", value: EthnicityEnum.NONHISPANIC},
    {label: "No Response", value: EthnicityEnum.NORESPONSE}
  ]

  private employmentOptions: SelectItem[] = [
    {label: 'Select', value: null},
    {label: 'Full Time Salaried', value: EmploymentEnum.FULLTIMESALARIED},
    {label: 'Part Time Salaried', value: EmploymentEnum.PARTTIMESALARIED},
    {label: 'Full Time Non-salaried', value: EmploymentEnum.FULLTIMENONSALARIED},
    {label: 'Part Time Non-salaried', value: EmploymentEnum.PARTTIMENONSALARIED},
    {label: 'Self Employed', value: EmploymentEnum.SELFEMPLOYED}
  ];

  private sexOptions: SelectItem[] = [{label: 'Select', value: null},
    {label: 'Male', value: SexEnum.MALE},
    {label: 'Female', value: SexEnum.FEMALE}
  ];

  private maritalOptions: SelectItem[] = [{label: 'Select', value: null},
    {label: 'Single', value: MaritalEnum.SINGLE},
    {label: 'Married', value: MaritalEnum.MARRIED},
    {label: 'Separated', value: MaritalEnum.SEPARATED},
    {label: 'Divorced', value: MaritalEnum.DIVORCED},
    {label: 'Widowed', value: MaritalEnum.WIDOWED}
  ];

  private livingOptions: SelectItem[] = [{label: 'Select', value: null},
    {label: 'Alone', value: LivingEnum.ALONE},
    {label: 'With Roommates', value: LivingEnum.WITHROOMMATES},
    {label: 'With Spouse', value: LivingEnum.WITHSPOUSE},
    {label: 'With Spouse and Children', value: LivingEnum.WITHSPOUSEANDCHILDREN},
    {label: 'With Parents', value: LivingEnum.WITHPARENTS},
    {label: 'Group Home', value: LivingEnum.GROUPHOME}
  ];


  constructor(private patientService: PatientService) {
    this.defaultDate = new Date();
    this.defaultDate.setFullYear(new Date().getFullYear() - 30);
  }

  ngOnInit() {
  }

  saveNewPatient() {
    this.patient.race = this.selectedRaces;
    console.log(this.patient);
    this.patientService.createPatient(this.patient).subscribe();
  }

}
