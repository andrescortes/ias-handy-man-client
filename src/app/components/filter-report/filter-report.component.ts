import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResponseReportModel} from "../../models/response-report.model";
import {ReportServiceModel} from "../../models/report-service.model";
import {MatDialog} from "@angular/material/dialog";
import {ModalResponseComponent} from "../modal-response/modal-response.component";
import {CalculateHoursService} from "../../services/calculate-hours.service";
import {HttpErrorResponse} from "@angular/common/http";
import * as moment from "moment";


@Component({
  selector: 'app-filter-report',
  templateUrl: './filter-report.component.html',
  styleUrls: ['./filter-report.component.css'],
})
export class FilterReportComponent implements OnInit {
  isLoading: boolean = false;
  formRegister: FormGroup;


  constructor(private formBuilder: FormBuilder, private service: CalculateHoursService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      technicianId: ['', [Validators.required]],
      weekYear: [moment().week() - 1, [Validators.required, Validators.min(1), Validators.max(53)]]
    })
  }

  getReportService(): void {
    this.isLoading = true;
    this.service.reportSave(this.formRegister.get("technicianId").value, this.formRegister.get("weekYear").value)
    .subscribe({
      next: (response: ResponseReportModel) => {
        if (response === 0) {
          this.isLoading = false;
          this.formRegister.reset()
          alert("No found")
        } else {
          this.isLoading = false;
          this.openDialog(response);
        }

      },
      complete: () => {
        this.formRegister.reset()
        this.formRegister.patchValue({
          weekYear: moment().week() - 1
        });
      },
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        if (err.status === 0) {
          this.formRegister.reset()
          alert("Server no response.")
        }
        if (err.status === 400) {
          this.formRegister.reset()
          alert(err.error.message)
        }
        if (err.status === 404) {
          this.formRegister.reset()
          alert(err.error.message)
        }
        this.formRegister.reset()
      }
    });

  }

  openDialog(data: ResponseReportModel): void {
    this.dialog.open(ModalResponseComponent, {
      data,
      width: '500px',
      height: '350px',
      enterAnimationDuration: '700ms',
      exitAnimationDuration: '550ms',
    });
  }


}
