import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class loginPageComponent {
  loginForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  displayLogin= true;
  displaySignIn= false;
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginPageService) { }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (response) => {
            // handle successful login
            this.router.navigate(['/dashboard']);
          },
          error: (error) => {
            // handle login error
          }
        });

    } else {
      // handle form validation errors
    }
  }
  onSignIn() {
    if (this.loginForm.valid) {
      this.loginService.signIn(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (response) => {
            // handle successful login
            this.router.navigate(['/overview']);
          },
          error: (error) => {
            // handle login error
          }
        });

    } else {
      // handle form validation errors
    }
  }
}
