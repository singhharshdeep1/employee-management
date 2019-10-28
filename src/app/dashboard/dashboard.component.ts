import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName: string;
  sidebarOpen: boolean;

  constructor(private authService: AuthService,
    private router:Router) {
      this.userName = localStorage.getItem('name');
      this.sidebarOpen = true;
    }

  ngOnInit() {
  }

  signOut() {
    this.authService.signOut();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log(this.sidebarOpen);
  }

}
