import {ReportServiceService} from "./report-service.service";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import {ReportServiceModel} from "../models/report-service.model";


describe('ReportServiceService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ReportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ReportServiceService
      ],
    });

    //Instantiates
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ReportServiceService);
  });

  afterEach(() => {
    httpTestingController.verify();//Verifies that no request are outstanding
  });

  it('should add a report service and return it', () => {
    const reportService: ReportServiceModel = {
      reportServiceId: '100',
      technicianId: '100',
      serviceStartDate: '2022-09-06T10:00:00.00',
      serviceEndDate: '2022-09-06T11:00:00.00'
    };

    service.reportSave(reportService).subscribe({
      next: data => expect(data).toEqual(reportService),
      error: fail
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/api/report-service`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(reportService);

    const expectedResponse = new HttpResponse({
      status: 201,
      statusText: 'Created',
      body: reportService
    });
    req.event(expectedResponse);
  });
})
