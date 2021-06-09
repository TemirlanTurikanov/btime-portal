import { Component, OnInit } from '@angular/core';
import {StudentWsService} from "../../../shared/service/student-ws.service";

@Component({
  selector: 'app-my-lessons-list',
  templateUrl: './my-lessons-list.component.html',
  styleUrls: ['./my-lessons-list.component.css']
})
export class MyLessonsListComponent implements OnInit {
  list= []

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
