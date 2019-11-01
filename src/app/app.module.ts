import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { HeaderComponent } from './header/header.component';
import { ShowDepartmentComponent } from './show-department/show-department.component';
import { DepartmentModalComponent } from './department-modal/department-modal.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemEmployeeService } from './in-mem-employee.service';
import { InMemDepartmentService } from './in-mem-department.service';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('165759161425-vtut8brk98hue4k3rhda5oknr26q3jll.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardSearchComponent,
    DashboardViewComponent,
    SidebarComponent,
    ShowEmployeeComponent,
    HeaderComponent,
    ShowDepartmentComponent,
    DepartmentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
