import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TcsEmployeesComponent } from './component/tcs-employees/tcs-employees.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tcs-employees', component: TcsEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
