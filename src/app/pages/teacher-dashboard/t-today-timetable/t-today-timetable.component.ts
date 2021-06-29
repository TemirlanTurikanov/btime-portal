import {Component, Input, OnInit} from '@angular/core';
import {TeacherWorkspaceService} from '../../../shared/service/teacher-workspace.service';
import {TeacherSchedulerService} from '../../../shared/service/teacher-scheduler.service';

@Component({
    selector: 'app-t-today-timetable',
    templateUrl: './t-today-timetable.component.html',
    styleUrls: ['./t-today-timetable.component.css']
})
export class TTodayTimetableComponent implements OnInit {
    public dataSource = [];
    panelOpenState = false;

    constructor(private service: TeacherWorkspaceService,
                private teacherSchedulerService: TeacherSchedulerService) {// microservice timetables
    }

    ngOnInit(): void {
        this.getAllData();
        this.getAllTimetable();   // microservice timetable
    }

    getAllData() {
        this.service.getWorkspaceData().subscribe(res => {
            this.dataSource = res;
        });
    }

    // microservice timetable
    getAllTimetable(): void {
        this.teacherSchedulerService.getAllTimetable().subscribe(res => {
            console.log('All Schedule:', res);
        });
    }

}





