import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ResponseReportModel} from "../../models/response-report.model";

@Component({
  selector: 'app-modal-response',
  templateUrl: './modal-response.component.html',
  styleUrls: ['./modal-response.component.css']
})
export class ModalResponseComponent implements OnInit {
  totalSeconds: number = 0;
  message: string = 'No time registered';

  constructor(@Inject(MAT_DIALOG_DATA) public data: ResponseReportModel) {
  }

  ngOnInit(): void {
    this.totalSeconds = Object.values(this.data).reduce((t, n) => t + n, 0);
  }

}
