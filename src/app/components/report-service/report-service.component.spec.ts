import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReportServiceComponent} from './report-service.component';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReportServiceService} from "../../services/report-service.service";
import {ReportServiceModel} from "../../models/report-service.model";
import {AppModule} from "../../app.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatTestDialogOpenerModule} from "@angular/material/dialog/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {Observable, of} from "rxjs";
import * as moment from "moment";


describe('ReportServiceComponent', () => {

  let component: ReportServiceComponent;
  let fixture: ComponentFixture<ReportServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ReportServiceService
      ],
      imports: [
        AppModule
      ],
      declarations: [
        ReportServiceComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is valid date', () => {
    let dateStart = new Date('2022-09-05T13:00:00.00');
    let dateEnd = new Date('2022-09-05T13:01:00.00');
    expect(component.isValidDate(dateStart, dateEnd)).toBeTruthy();
  });

  it('should call openDialog method', () => {
    let data: ReportServiceModel = {
      reportServiceId: '100',
      technicianId: '100',
      serviceStartDate: '2022-09-05T13:00:00.00',
      serviceEndDate: '2022-09-05T14:00:00.00'
    }
    component.openDialog(data);
    fixture.detectChanges();
    const popupHeader = document.getElementsByTagName('h1')[0] as HTMLHeadElement;
    expect(popupHeader.innerText).toEqual('Report Service Created');
  });

});

describe('ReportServiceComponent (shallow tests)', () => {
  let fixture: ComponentFixture<ReportServiceComponent>;
  //let mockService:ReportServiceService;
  let reportServiceModel: ReportServiceModel;
  let component: ReportServiceComponent;
  let formBuilder: FormBuilder;
  let service;
  beforeEach(() => {

    reportServiceModel = {
      reportServiceId: '100',
      technicianId: '100',
      serviceStartDate: '2022-09-06T10:00:00.00',
      serviceEndDate: '2022-09-06T11:00:00.00'
    };
    //mockService = jasmine.createSpyObj(['reportSave']);

    TestBed.configureTestingModule({
      declarations: [
        ReportServiceComponent,
      ],
      providers: [
        FormBuilder,
        ReportServiceService
        // {provide: ReportServiceService, useValue: mockService},
      ],
      imports: [
        HttpClientTestingModule,
        MatTestDialogOpenerModule//dependency of our component
      ],
      schemas: [NO_ERRORS_SCHEMA]//no validate HTML as components mat-spinner, routerLink ...
    });

    fixture = TestBed.createComponent(ReportServiceComponent);
    service = fixture.debugElement.injector.get(ReportServiceService);
    component = fixture.componentInstance;
  });

  xit('should save a report from component', () => {
    let spyService = spyOn(service, 'reportSave').and.returnValue(of(reportServiceModel));
    let spyOnReportSave = spyOn(component,'saveReport' ).and.callThrough();
    let spyOnOpenDialogue = spyOn(component,'openDialog' ).withArgs(reportServiceModel);

    component.ngOnInit();
    component.formRegister.patchValue({
      reportServiceId: '100',
      technicianId: '100',
      serviceStartDate: '2022-09-06T10:00:00.00',
      serviceEndDate: '2022-09-06T11:00:00.00'
    });
    expect(component.formRegister.get('reportServiceId').value).toEqual('100');

    expect(spyOnReportSave).toHaveBeenCalledTimes(1);
    //component.saveReport();

    //expect(spyOn(fixture.componentInstance, 'openDialog')).toHaveBeenCalledTimes(0);


  });

  it('should change value isLoading', () => {
    fixture.componentInstance.isLoading = true;
    expect(fixture.componentInstance.isLoading).toBe(true);
  });

  it('should render a tag with "Register a service"', () => {
    fixture.detectChanges();
    let deA = fixture.debugElement.query(By.css('p'));
    expect(deA.nativeElement.textContent).toContain('Register a service');
    //expect(fixture.nativeElement.querySelector('p').textContent).toContain('Register a service');
  });
})

