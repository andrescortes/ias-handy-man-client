import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BaseComponent} from "./components/base/base.component";
import {ReportServiceComponent} from "./components/report-service/report-service.component";
import {FilterReportComponent} from "./components/filter-report/filter-report.component";
import {NoFoundComponent} from "./components/no-found/no-found.component";

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'report-service', component: ReportServiceComponent},
  {path: 'filter-report', component: FilterReportComponent},
  {path: '**', component: NoFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
