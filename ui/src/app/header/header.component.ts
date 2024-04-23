import { ChangeDetectorRef, Component } from '@angular/core';
import { LoginPageService } from '../login-page/login-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  validAuth = this.loginService.validateToken();
  constructor(private loginService: LoginPageService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.loginService.loginStatusChanged.subscribe((isLoggedIn) => {
      this.validAuth = isLoggedIn
      this.cdr.detectChanges();

    });
  }
  logOut() {
    this.loginService.logout();

  }
}
