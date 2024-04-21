import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loginPageComponent } from './login-page.component';

describe('loginPageComponent', () => {
  let component: loginPageComponent;
  let fixture: ComponentFixture<loginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [loginPageComponent]
    });
    fixture = TestBed.createComponent(loginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
