import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverviewComponent } from './overview/overview.component';
import { WorkspaceDialogComponent } from './workspace-dialog/workspace-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    loginPageComponent,
    HeaderComponent,
    OverviewComponent,
    WorkspaceDialogComponent,
    ProjectDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
