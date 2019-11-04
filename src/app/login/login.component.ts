import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

import { isEmailAuthorized } from '../utils/auth-utils';
import { EmployeeService } from '../employee.service';
import Employee from '../models/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private empService: EmployeeService) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  googleSignIn() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
                    .then(user => {
                      if (isEmailAuthorized(user.email)) {
                        localStorage.setItem('name', user.name)
                        localStorage.setItem('token', user.idToken);
                        this.empService.getEmployees().subscribe(employees => {
                          let employee = employees.find(emp => user.email == emp.FirstName + " " + emp.LastName);
                          if (!employee) {
                            let firstName = user.name.split(' ')[0];
                            let lastName = user.name.split(' ')[1]; 
                            let newEmployee = new Employee(firstName, lastName, "", new Date(), 'Computer Programmer');
                            this.empService.create(newEmployee).subscribe(res => this.router.navigate(['/dashboard']));
                          }
                        })
                      } else {
                        alert("Please login with your performance email");                        
                      }
                    });
  }
  
}
