import {Component, OnDestroy} from '@angular/core';
import {ApiService} from "./api.service";
import {takeUntil} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  tableData: any;

  form = new FormGroup({
    healthIndex: new FormControl(),
    animalId: new FormControl(),
    lactationNumber: new FormControl(),
    ageInDays: new FormControl(),
  });

  private unsubscribe: Subject<any>;

  constructor(
    private apiService: ApiService,
  ) {
    this.unsubscribe = new Subject();
    this.apiService.getCows().pipe(takeUntil(this.unsubscribe)).subscribe(res => this.tableData = res)
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  deleteRow(id: number) {
    this.apiService.deleteCow(id).pipe(takeUntil(this.unsubscribe)).subscribe(res => this.tableData = res);
  }

  addCow() {
    this.apiService.newCow(this.form.value).pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      this.tableData = res;
      this.form.reset();
    });
  }

  saveEdited(cowId: number, healthIndex: number, animalId: string, lactationNumber: number, ageInDays: number) {
    const cow = {
      cowId: cowId,
      healthIndex: healthIndex,
      animalId: animalId,
      lactationNumber: lactationNumber,
      ageInDays: ageInDays
    }
    this.apiService.updateCow(cow).pipe(takeUntil(this.unsubscribe)).subscribe(res => this.tableData = res);
  }
}
