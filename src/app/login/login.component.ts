import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

import { isEmailAuthorized } from '../utils/auth-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

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
                        this.router.navigate(['/dashboard']);
                      } else {
                        alert("Please login with your performance email");                        
                      }
                    });
  }
  
}
