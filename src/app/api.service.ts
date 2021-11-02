import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({providedIn: "root"})
export class ApiService {
  constructor(private httpClient: HttpClient) {
  }

  getCows(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/get`);
  }

  deleteCow(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/delete/${id}`);
  }

  newCow(cow: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/add/`, cow);
  }

  updateCow(cow: any): Observable<any> {
    return this.httpClient.put(`${environment.baseUrl}/update/`, cow);
  }
}
