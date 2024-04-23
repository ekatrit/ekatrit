import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginPageService } from '../login-page/login-page.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient, private authSer: LoginPageService) { }
  private baseUrl = environment.baseUrl;

  getAllWorkspace() {
    const token: any = this.authSer.getToken();
    const headers = new HttpHeaders().set('x-auth-token', token);
    return this.http.get(this.baseUrl + '/api/v1/workspace', { headers });
  }

  saveWorkspace(workspaceDetails: any) {
    const token: any = this.authSer.getToken();
    const headers = new HttpHeaders().set('x-auth-token', token);
    return this.http.post(this.baseUrl + '/api/v1/workspace', workspaceDetails, { headers });
  }

  getProjectByWorkspaceId(workspaceId: any) {
    const token: any = this.authSer.getToken();
    const headers = new HttpHeaders().set('x-auth-token', token);
    return this.http.get(this.baseUrl + '/api/v1/project?workspaceId=' + workspaceId, { headers });
  }

  saveProject(projectDetails: any) {
    const token: any = this.authSer.getToken();
    const headers = new HttpHeaders().set('x-auth-token', token);
    return this.http.post(this.baseUrl + '/api/v1/project', projectDetails, { headers });
  }
}
