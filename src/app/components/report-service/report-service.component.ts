import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import {ReportServiceService} from "../../services/report-service.service";
import {ReportServiceModel} from "../../models/report-service.model";
import {HttpErrorResponse} from "@angular/common/http";
import * as moment from "moment/moment";
import {MatDialog} from "@angular/material/dialog";
import {ModalReportComponent} from "../modal-report/modal-report.component";


@Component({
  selector: 'app-report-service',
  templateUrl: './report-service.component.html',
  styleUrls: ['./report-service.component.css']
})
export class ReportServiceComponent implements OnInit {
  formRegister: FormGroup;

  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private reportService: ReportServiceService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      reportServiceId: ['', [Validators.required]],
      technicianId: ['', [Validators.required]],
      serviceStartDate: [moment(), [Validators.required]],
      serviceEndDate: [moment().add(1,'h'), [Validators.required]],
    });
  }

  saveReport(): void {
    let entity = this.formRegister.value as ReportServiceModel;
    entity.serviceStartDate = moment(this.formRegister.get("serviceStartDate").value).seconds(0).format('YYYY-MM-DDTHH:mm:ss');
    entity.serviceEndDate = moment(this.formRegister.get("serviceEndDate").value).seconds(0).format('YYYY-MM-DDTHH:mm:ss');
    let isValid = this.isValidDate(new Date(entity.serviceStartDate), new Date(entity.serviceEndDate))
    if (isValid) {
      this.isLoading = true;
      this.reportService.reportSave(entity).subscribe({
        next: (data: ReportServiceModel) => {
          this.isLoading = false;
          this.openDialog(data)
        },
        complete: () => {
          this.formRegister.reset()
          this.formRegister.patchValue({
            serviceStartDate: moment(),
            serviceEndDate: moment().add(1,'h')
          })
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          if (err.status === 0) {
            this.formRegister.reset()
            alert("Server no response.")
          }
          if (err.status===400){
            this.formRegister.reset()
            alert(err.error.message)
          }
          this.formRegister.reset()
        }
      });
    } else {
      alert("Date no valid")
    }
  }

  isValidDate(startDate: Date, endDate: Date): boolean {
    return startDate < endDate;
  }

  openDialog(data: ReportServiceModel): void {
    this.dialog.open(ModalReportComponent, {
      data,
      width: '400px',
      height: '250px',
      enterAnimationDuration: '700ms',
      exitAnimationDuration: '550ms',
    });
  }
}
