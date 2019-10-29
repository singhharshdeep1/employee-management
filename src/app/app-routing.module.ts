import { AuthGuardService } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { ShowDepartmentComponent } from './show-department/show-department.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
    canActivate: [AuthGuardService]
  },
  {
    path: 'employee/:id',
    component: ShowEmployeeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'department/:id',
    component: ShowDepartmentComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule { }
