import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "primeng/primeng";
import {LabService} from "../../../../../services/lab/lab.service";
import {CbcLabDto} from "../../../../../swagger-patient-service/model/CbcLabDto";

@Component({
  selector: 'app-labs-dialog',
  templateUrl: './labs-dialog.component.html',
  styleUrls: ['./labs-dialog.component.scss']
})
export class LabsDialogComponent implements OnInit {

  @Input()
  display: boolean;

  @Output()
  displayChange = new EventEmitter<boolean>();

  testDate: Date;

  completeBloodCountLab: CbcLabDto = {};

  testTypes: SelectItem[] = [
    {label: 'CBC', value: "CBC"},
    {label: 'Lipid Panel', value: "LIPIDPANEL"},
    {label: 'Liver Enzymes', value: "LIVERENZYMES"},
    {label: 'Lithium', value: "LITHIUM"},
    {label: 'Divalproex', value: "DIVALPROEX"},
    {label: 'Carbamazepine', value: "CARBAMAZEPINE"}
  ];

  defaultDate: Date = new Date();

  yearRange: string = (new Date().getFullYear() - 120) + ':' + (new Date().getFullYear());

  constructor(private labService: LabService) {
  }

  ngOnInit() {
  }

  saveCbcLab() {

    this.completeBloodCountLab.testDate = this.testDate;

    this.labService.saveCbcLab(this.completeBloodCountLab).subscribe(
      (response:any) => {
        console.log(response);
        this.displayChange.emit(false);
      }
    );
  }

}
