import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalReportComponent} from './modal-report.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Pipe, PipeTransform} from "@angular/core";
import {DatePipe} from "@angular/common";

DatePipe

@Pipe({name: 'date'})
class MockPipeTest implements PipeTransform {
  transform(value: any, ...args): any {
  }
}
describe('ModalReportComponent', () => {
  let component: ModalReportComponent;
  let fixture: ComponentFixture<ModalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        // { provide: MdDialogRef, useValue: {} }, --> deprecated
        {provide: MatDialogRef, useValue: {}},
        {provide: DatePipe, useClas:MockPipeTest}
      ],

      declarations: [
        ModalReportComponent,
        MockPipeTest

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
