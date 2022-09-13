import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, retry} from "rxjs";
import {ReportServiceModel} from "../models/report-service.model";

@Injectable()
export class ReportServiceService {
  apiUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  reportSave(report: ReportServiceModel): Observable<ReportServiceModel> {
    return this.httpClient.post<ReportServiceModel>(`${this.apiUrl}/report-service`, report, this.httpOptions)
    .pipe(
      retry(1)
    );
  }
}
