import {Component, OnInit} from '@angular/core';
import {TeacherSchedulerService} from '../../shared/service/teacher-scheduler.service';

@Component({
    selector: 'app-teacher-scheduler',
    templateUrl: './teacher-scheduler.component.html',
    styleUrls: ['./teacher-scheduler.component.scss']
})
export class TeacherSchedulerComponent implements OnInit {
    public displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];
    public dataSource = [];

    constructor(private service: TeacherSchedulerService) {
    }

    ngOnInit(): void {
        this.getAllData();
    }

    getAllData() {
        this.service.getAllData(2, 'E2019_2020').subscribe(res => {
            this.dataSource = res;
        });
    }
}
