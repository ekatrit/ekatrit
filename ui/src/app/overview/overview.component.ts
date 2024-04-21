import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkspaceDialogComponent } from '../workspace-dialog/workspace-dialog.component';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  constructor(public dialog: MatDialog) { }
  workspaces: any = [{ name: 'result' }];
  projects: any = [];
  selectedWSName = '';
  openDialog(): void {
    const dialogRef = this.dialog.open(WorkspaceDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed' + result);
      if (result.length > 0) {
        let newWs = { name: result };
        this.workspaces.push(newWs);
      }


    });
  }
  openProjDialog(): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed' + result);
      if (result.length > 0) {
        let newWs = { name: result };
        this.projects.push(newWs);
      }


    });
  }
  selectedWorkspace(workspace: any) {
    // this.projects = workspace.projects;
    this.selectedWSName = workspace.name;
    this.projects = [{ name: 'Project 1' }, { name: 'Project 2' }];

  }
  ngOnInit() {
    this.selectedWorkspace({ projects: [{ name: 'Project 1' }, { name: 'Project 2' }] });
  }
}
