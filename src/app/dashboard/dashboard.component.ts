import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sidebarOpen: boolean;

  constructor(
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.sidebarService.sidebarVisible.subscribe(visible => this.sidebarOpen = visible);
  }

}
