import {Component} from '@angular/core';
import {ApiService} from "./api.service";
import {take} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableData: any;
  // dataSchema = {
  //   "cowId": "number",
  //   "healthIndex": "number",
  //   "animalId": "string",
  //   "lactationNumber": "number",
  //   "ageInDays": "number"
  // }

  form = new FormGroup({
    healthIndex: new FormControl(),
    animalId: new FormControl(),
    lactationNumber: new FormControl(),
    ageInDays: new FormControl(),
  });

  constructor(
    private apiService: ApiService,
  ) {
    this.apiService.getCows().pipe(take(1)).subscribe(res => this.tableData = res);
  }

  deleteRow(id: number) {
    this.apiService.deleteCow(id).pipe(take(1)).subscribe(res => this.tableData = res);
  }

  addCow() {
    this.apiService.newCow(this.form.value).pipe(take(1)).subscribe(res => this.tableData = res);
  }

  saveEdited(cowId: number, healthIndex: number, animalId: string, lactationNumber: number, ageInDays: number) {
    const cow = {
      cowId: cowId,
      healthIndex: healthIndex,
      animalId: animalId,
      lactationNumber: lactationNumber,
      ageInDays: ageInDays
    }
    this.apiService.updateCow(cow).pipe(take(1)).subscribe(res => this.tableData = res);
  }
}
