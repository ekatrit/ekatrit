import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectId: string='';

  constructor(private router: Router) {
  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    debugger
    this.projectId = navigation?.extras.state?.['id'];
  }
}