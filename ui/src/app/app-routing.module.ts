// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginPageComponent } from './login-page/login-page.component';
import { OverviewComponent } from './overview/overview.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default to login page
  { path: 'login', component: loginPageComponent },
  { path: 'dashboard', component: OverviewComponent, canActivate: [AuthGuard] },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }