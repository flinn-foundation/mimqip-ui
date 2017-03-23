import {Component, OnInit} from '@angular/core';
import {Rule} from "../../../models/rule";
import {Diagnosis} from "../../../models/diagnosis";
import {Message} from "../../../models/message";

@Component({
  selector: 'app-rule-details',
  templateUrl: './rule-details.component.html',
  styleUrls: ['./rule-details.component.scss']
})
export class RuleDetailsComponent implements OnInit {

  ruleTypes: string[] = ["generalmessages",
    "generalconsistency",
    "additionalconsistency",
    "treatmentmessages",
    "specialmessages",
    "clinicalresponse",
    "medicaltrial",
    "othersideeffects",
    "otherreports"];

  rule: Rule;
  diagnoses: Diagnosis[];
  ruleDiagnosis: Diagnosis;
  messages: Message[];
  trueMessage: Message;
  falseMessage: Message;

  constructor() {
  }

  ngOnInit() {
  }

  updateRule() {
    // frmvalidator.addValidation("RuleName","req","Please enter a name for the rule");
    // frmvalidator.addValidation("RuleName","maxlen=50","Max length for rule name  is 50");
    // frmvalidator.addValidation("RuleType","req","Please enter a type for the rule");
    // frmvalidator.addValidation("RuleType","maxlen=50","Max length for rule type  is 50");
  }

  editRule() {

  }

  addCriterion(id: string) {

  }

  deleteCriterion() {

  }

}
