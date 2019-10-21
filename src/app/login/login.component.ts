import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

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

  public googleSignIn() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
                    .then(user => {
                      localStorage.setItem('token', user.idToken);
                      this.router.navigate(['/dashboard'])
                    });
  }

}
