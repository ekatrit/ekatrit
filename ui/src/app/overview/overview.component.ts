import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkspaceDialogComponent } from '../workspace-dialog/workspace-dialog.component';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  constructor(public dialog: MatDialog, private dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
    this.dashboardService.getAllWorkspace()
      .subscribe({
        next: (response: any) => {
          this.workspaces = response.workspace;
          this.selectWorkspace(this.workspaces[0]);
        },
        error: (error) => {
          // handle login error
        }
      });

  }

  workspaces: any;
  projects: any;
  selectedWorkspace = { workspaceId: '', workspaceName: '' };
  openDialog(): void {
    const dialogRef = this.dialog.open(WorkspaceDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result.length > 0) {
        this.dashboardService.saveWorkspace({ workspaceName: result })
          .subscribe({
            next: (response: any) => {
              this.workspaces = response.workspace;

            },
            error: (error) => {
              // handle login error
            }
          });
      }
    });
  }
  openProjDialog(): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result.length > 0) {
        this.dashboardService.saveProject({ projectName: result, workspaceId: this.selectedWorkspace.workspaceId })
          .subscribe({
            next: (response: any) => {
              this.projects = response.project;

            },
            error: (error) => {
              // handle login error
            }
          });
      }


    });
  }
  selectWorkspace(workspace: any) {
    // this.projects = workspace.projects;
    this.selectedWorkspace = { workspaceId: workspace.workspaceId, workspaceName: workspace.workspaceName };
    this.dashboardService.getProjectByWorkspaceId(workspace.workspaceId)
      .subscribe({
        next: (response: any) => {
          this.projects = response.project;

        },
        error: (error) => {
          // handle login error
        }
      });

  }
  
  navigateToProject(projectId: string) {
    debugger
    this.router.navigate(['/project'], { state: { id: projectId } });
  }
}
