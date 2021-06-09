import { Component, OnInit } from '@angular/core';
import {TeacherMyGroupListService} from '../../../shared/service/teacher-mygrouplist.service';

@Component({
  selector: 'app-t-my-group-list',
  templateUrl: './t-my-group-list.component.html',
  styleUrls: ['./t-my-group-list.component.css']
})
export class TMyGroupListComponent implements OnInit {
  public dataSource = [];
  panelOpenState = false;
  constructor(private service: TeacherMyGroupListService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.service.getMyGroupListData(2).subscribe(res => {
      this.dataSource = res;
    });
  }

}






