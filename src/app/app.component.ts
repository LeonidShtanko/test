import {Component} from '@angular/core';
import {ApiService} from "./api.service";
import {FormControl, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableData: any;
  displayColumns = ["cowId", "healthIndex", "animalId", "lactationNumber", "ageInDays", "edit"];
  // dataSchema = {
  //   "cowId": "number",
  //   "healthIndex": "number",
  //   "animalId": "text",
  //   "lactationNumber": "number",
  //   "ageInDays": "number"
  // }
  // isReadOnly = {
  //   "cowId": true
  // }

  form = new FormGroup({
    cowId: new FormControl(),
    healthIndex: new FormControl(),
    animalId: new FormControl(),
    lactationNumber: new FormControl(),
    ageInDays: new FormControl(),
    edit: new FormControl(),
  });

  constructor(
    private apiService: ApiService,
  ) {
    this.apiService.getData().subscribe(res => this.tableData = res.result);
  }
}
