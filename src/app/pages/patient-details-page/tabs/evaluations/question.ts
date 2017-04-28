import {ScaleDetail} from "./scale-detail";
export class Question {

  constructor(public title: string, public subTitle: string, public description: string, public longDescription: string, public scaleDetails: ScaleDetail[]) {
  }

}
