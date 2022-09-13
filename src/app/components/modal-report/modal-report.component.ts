import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ReportServiceModel} from "../../models/report-service.model";

@Component({
  selector: 'app-modal-report',
  templateUrl: './modal-report.component.html',
  styleUrls: ['./modal-report.component.css']
})
export class ModalReportComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ReportServiceModel) {}

  ngOnInit(): void {
  }

  test():void{

  }


}
