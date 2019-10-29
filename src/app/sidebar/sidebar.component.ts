import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selectedTab: string;
  sidebarOpen: boolean;

  constructor(
    private sidebarService: SidebarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sidebarService.sidebarVisible.subscribe(visible => this.sidebarOpen = visible);
    this.sidebarService.currentTab.subscribe(tab => this.selectedTab = tab);
  }

  changeTab(tab: string) {
    this.sidebarService.changeTab(tab);
    this.router.navigate(['/dashboard']);
  }

}
