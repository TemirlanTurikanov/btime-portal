import { Component, OnInit } from '@angular/core';
import {StudentWsService} from '../../../shared/service/student-ws.service';

@Component({
  selector: 'app-today-timetable',
  templateUrl: './today-timetable.component.html',
  styleUrls: ['./today-timetable.component.css']
})
export class TodayTimetableComponent implements OnInit {
  toList = [];

  constructor(private studentWsService: StudentWsService) { }

  ngOnInit(): void {
    this.getHotData();
  }
  getHotData() {
    this.studentWsService.getHotData(1).subscribe(res => {
      this.toList = res;
    });
  }
}
