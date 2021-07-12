import { Component, OnInit } from '@angular/core';
import {StudentProgressListService} from '../../shared/service/student/student-progress-list.service';

@Component({
  selector: 'app-student-progress-list',
  templateUrl: './student-progress-list.component.html',
  styleUrls: ['./student-progress-list.component.css']
})
export class StudentProgressListComponent implements OnInit {

  public displayedColumns: string[] = ['1', '2', '3', '4'];
  public dataSource = []; // [ {ord: 'Algebra1', subject: 'teacher', homework: '25 room', garde: '11 A' }];

  constructor(private studentProgressListService: StudentProgressListService) { }

  ngOnInit(): void {
    this.getMyCources();
  }

  getMyCources() {
    this.studentProgressListService.getMyCources(1).subscribe(res => {
      this.dataSource = res;
    });
  }
}
