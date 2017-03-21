import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateSettings() {
    console.log("Doing the update");
  //  var frmvalidator  = new Validator("adminform");
  //   frmvalidator.addValidation("Name","req","Please enter a name");
  //   frmvalidator.addValidation("Name","maxlen=50","Max length for message is 50");
  //   frmvalidator.addValidation("Value","req","Please enter a value");
  //   frmvalidator.addValidation("Value","maxlen=50","Max length for message is 50");
  }

  editSettings() {
    console.log("Edit me");
  }

}
