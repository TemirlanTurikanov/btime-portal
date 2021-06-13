import { Component, OnInit } from '@angular/core';
import {StudentWsService} from "../../../shared/service/student/student-ws.service";

@Component({
  selector: 'app-my-lessons-list',
  templateUrl: './my-lessons-list.component.html',
  styleUrls: ['./my-lessons-list.component.scss']
})
export class MyLessonsListComponent implements OnInit {
  list = [];
  public displayedColumns: string[] = ['1'];
  constructor(private studentWsService: StudentWsService) { }

  ngOnInit(): void {
    this.getMyCources();
  }

  getMyCources() {
    this.studentWsService.getMyCources(1).subscribe(res => {
      this.list = res;
    })
  }

}
