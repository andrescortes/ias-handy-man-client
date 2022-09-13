import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BaseComponent} from './components/base/base.component';
import {ReportServiceComponent} from "./components/report-service/report-service.component";
import {FooterComponent} from './components/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {FilterReportComponent} from './components/filter-report/filter-report.component';
import {NoFoundComponent} from './components/no-found/no-found.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ReportServiceService} from "./services/report-service.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  NGX_MAT_DATE_FORMATS,
  NgxMatDateAdapter,
  NgxMatDateFormats,
  NgxMatDatetimePickerModule
} from "@angular-material-components/datetime-picker";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {NgxMatMomentAdapter} from "@angular-material-components/moment-adapter";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS} from "@angular/material-moment-adapter";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CalculateHoursService} from "./services/calculate-hours.service";
import { ModalReportComponent } from './components/modal-report/modal-report.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ModalResponseComponent } from './components/modal-response/modal-response.component';
import {FormatTimePipePipe} from "./pipes/format-time.pipes";
import {MatTableModule} from "@angular/material/table";

const MY_NGX_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "l, LTS"
  },
  display: {
    dateInput: "yyyy-MM-DD HH:mm",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseComponent,
    ReportServiceComponent,
    FooterComponent,
    FilterReportComponent,
    NoFoundComponent,
    ModalReportComponent,
    ModalResponseComponent,
    FormatTimePipePipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [
    ReportServiceService,
    CalculateHoursService,
    {
      provide: NgxMatDateAdapter,
      useClass: NgxMatMomentAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: NGX_MAT_DATE_FORMATS, useValue: MY_NGX_DATE_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
