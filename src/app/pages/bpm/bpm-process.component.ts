import { Component, OnInit } from '@angular/core';
import {StudentWsService} from '../../shared/service/student/student-ws.service';
import {BpmService} from '../../shared/service/bpm/bpm.service';

@Component({
  selector: 'app-bpm-process',
  templateUrl: './bpm-process.component.html',
  styleUrls: ['./bpm-process.component.css']
})
export class BpmProcessComponent implements OnInit {

  constructor(private bpmService: BpmService) { }
  public dataSource = [];
  public displayedColumns: string[] = ['1', '2', '3', '4', '5'];
  ngOnInit(): void {
    this.getAllTasks();

  }

  getAllTasks(){
    this.bpmService.getAllBpm().subscribe(res => {
      this.dataSource = res;
      console.log(res);
    });
  }


  getClaim(){
    this.bpmService.getAllBpm().subscribe(res => {
      this.dataSource = res;
      console.log(res);
    });


  }


  getStart(){
    this.bpmService.getAllBpm().subscribe(res => {
      this.dataSource = res;
      console.log(res);
    });


  }
}
