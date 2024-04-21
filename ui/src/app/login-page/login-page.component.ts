import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class loginPageComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  onSubmit() {
    if (this.loginForm.valid) {
      // handle successful form submission
      this.router.navigate(['/overview']);

    } else {
      // handle form validation errors
    }
  }
}
