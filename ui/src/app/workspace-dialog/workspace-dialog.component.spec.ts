import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceDialogComponent } from './workspace-dialog.component';

describe('WorkspaceDialogComponent', () => {
  let component: WorkspaceDialogComponent;
  let fixture: ComponentFixture<WorkspaceDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkspaceDialogComponent]
    });
    fixture = TestBed.createComponent(WorkspaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
