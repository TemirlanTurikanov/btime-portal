import {Component, Input, OnInit} from '@angular/core';
import {TeacherWorkspaceService} from '../../../shared/service/teacher-workspace.service';

@Component({
    selector: 'app-t-today-timetable',
    templateUrl: './t-today-timetable.component.html',
    styleUrls: ['./t-today-timetable.component.css']
})
export class TTodayTimetableComponent implements OnInit {
    public dataSource = [];
    panelOpenState = false;

    constructor(private service: TeacherWorkspaceService) {
    }

    ngOnInit(): void {
        this.getAllData();
    }

    getAllData() {
        this.service.getWorkspaceData().subscribe(res => {
            this.dataSource = res;
        });
    }

}





