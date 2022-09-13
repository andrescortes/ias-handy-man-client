import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterReportComponent } from './filter-report.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {CalculateHoursService} from "../../services/calculate-hours.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {Overlay} from "@angular/cdk/overlay";

/*
describe('FilterReportComponent', () => {
  let component: FilterReportComponent;
  let fixture: ComponentFixture<FilterReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        FormBuilder,
        CalculateHoursService,
        HttpClient,
        HttpHandler,
        MatDialog,
        Overlay,

      ],
      imports:[
        ReactiveFormsModule
      ],
      declarations: [
        FilterReportComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
