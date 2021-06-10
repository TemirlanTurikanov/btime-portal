import { Component, OnInit } from '@angular/core';
import {TeacherJournalService} from '../../shared/service/teacher/teacher-journal.service';

@Component({
  selector: 'app-teacher-journal',
  templateUrl: './teacher-journal.component.html',
  styleUrls: ['./teacher-journal.component.scss']
})
export class TeacherJournalComponent implements OnInit {
  public displayedColumns: string[] = ['1', '2', '3', '4'];
  public dataSource = [
   {ord: '1',
     student: 'Vova',
     byl: '1',
     grade: '100',
     prim: 'krsava'},
    {ord: '2',
      student: 'Vova',
      byl: '1',
      grade: '100',
      prim: 'krsava'},
    {ord: '3',
      student: 'Vova',
      byl: '1',
      grade: '100',
      prim: 'krsava'}  ];

  constructor(private service: TeacherJournalService) { }

  ngOnInit(): void {
    this.getLessonJournal();

  }

  getLessonJournal(){
    this.service.getLessonJournal().subscribe(res => {
      this.dataSource = res;
    });
  }

}
