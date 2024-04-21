import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-workspace-dialog',
  templateUrl: './workspace-dialog.component.html',
})
export class WorkspaceDialogComponent {
  workspaceName = '';

  constructor(
    public dialogRef: MatDialogRef<WorkspaceDialogComponent>) { }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.workspaceName);
  }
}