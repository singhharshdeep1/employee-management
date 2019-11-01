import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;
  sidebarOpen = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private sidebarService: SidebarService
  ) {
    this.userName = localStorage.getItem('name');
  }

  ngOnInit() {
  }

  goToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  signOut() {
    this.authService.signOut();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

}
