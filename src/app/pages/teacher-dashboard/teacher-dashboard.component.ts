import { Component, OnInit } from '@angular/core';
import {TeacherWorkspaceService} from '../../shared/service/teacher-workspace.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
