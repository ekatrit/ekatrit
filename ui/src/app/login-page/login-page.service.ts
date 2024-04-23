import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
  private baseUrl = environment.baseUrl;
  @Output() loginStatusChanged = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post(this.baseUrl + '/api/v1/login', { email: username, password: password })
      .pipe(tap((response: any) => {
        if (response && response.token) {
          debugger
          localStorage.setItem('token', response.token);
          this.loginStatusChanged.emit(true);
        }
      }));
  }
  logout() {
    // Clear the token from storage
    localStorage.removeItem('token');
    this.loginStatusChanged.emit(false);
    this.router.navigate(['/login']);

  }
  validateToken() {
    const token = localStorage.getItem('token');
    if (token) {
      // Validate the token if necessary
      return true;
    }
    else{
      return false
    }
  }
  getToken() {
    return localStorage.getItem('token');
  }

  signIn(username: string, password: string) {
    return this.http.post(this.baseUrl + '/api/v1/signup', { email: username, password: password });
  }
}
