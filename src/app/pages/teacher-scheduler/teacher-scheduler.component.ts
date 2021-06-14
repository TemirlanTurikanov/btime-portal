import {Component, OnInit} from '@angular/core';
import {TeacherSchedulerService} from '../../shared/service/teacher-scheduler.service';

@Component({
    selector: 'app-teacher-scheduler',
    templateUrl: './teacher-scheduler.component.html',
    styleUrls: ['./teacher-scheduler.component.scss']
})
export class TeacherSchedulerComponent implements OnInit {
    public displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7'];
    public dataSource = [];
    public curUser: any;
    public curLogin : any;

    constructor(private service: TeacherSchedulerService) {
    }

    ngOnInit(): void {
        this.curLogin = JSON.parse(localStorage.getItem('user')).principal;
        this.getAllData();

    }

    getAllData() {
        this.service.getAllData( 'E2019_2020').subscribe(res => {
            this.dataSource = res;
        });
    }
}
