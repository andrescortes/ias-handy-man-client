import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, retry} from "rxjs";
import {ResponseReportModel} from "../models/response-report.model";

@Injectable()
export class CalculateHoursService {
  private readonly apiUrl = 'http://localhost:8080/api/hours-calculate';

  constructor(private httpClient: HttpClient) {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  reportSave(technicianId: string, weekYear: string): Observable<ResponseReportModel> {
    return this.httpClient.get<ResponseReportModel>(`${this.apiUrl}/technician/${technicianId}/week/${weekYear}`, this.httpOptions)
    .pipe(
      retry(1)
    );
  }
}
