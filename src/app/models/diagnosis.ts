import {Guideline} from "./guideline";

export class Diagnosis {
  id: string;
  name: string;
  value: string;
  notes: string;
  stage: string;
  guidelines: Guideline[];

}
