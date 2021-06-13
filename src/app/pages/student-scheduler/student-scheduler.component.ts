import {Component, OnInit} from '@angular/core';
import {StudentTimetableService} from '../../shared/service/student/student-timetable.service';

@Component({
    selector: 'app-student-scheduler',
    templateUrl: './student-scheduler.component.html',
    styleUrls: ['./student-scheduler.component.scss']
})
export class StudentSchedulerComponent implements OnInit {
    public displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];
    //public dataSource =  [];

    public dataSource =  [
        {
            time: '08:55',
            l1: { name: 'Algebra1', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l2: { name: 'Algebra2', teacher: 'teacher', classRoom: '25 room', group: '112 A' },
            l3: { name: 'Algebra3', teacher: 'teacher', classRoom: '25 room', group: '111 A' },
            l4: { name: 'Algebra4', teacher: 'teacher', classRoom: '25 room', group: '113 A' },
            l5: { name: 'Algebra5', teacher: 'teacher', classRoom: '25 room', group: '114 A' }
        },
        {
            time: '08:55',
            l1: { name: 'Algebra6', teacher: 'teacher', classRoom: '25 room', group: '115 A' },
            l2: { name: 'Algebra7', teacher: 'teacher', classRoom: '25 room', group: '116 A' },
            l3: { name: 'Algebra8', teacher: 'teacher', classRoom: '25 room', group: '117 A' },
            l4: { name: 'Algebra9', teacher: 'teacher', classRoom: '25 room', group: '118 A' },
            l5: { name: 'Algebra0', teacher: 'teacher', classRoom: '25 room', group: '119 A' }
        },
        {
            time: '08:55',
            l1: { name: 'Algebra12', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l2: { name: 'Algebra13', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l3: { name: 'Algebra14', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l4: { name: 'Algebra21', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l5: { name: 'Algebra22', teacher: 'teacher', classRoom: '25 room', group: '11 A' }
        },
        {
            time: '08:55',
            l1: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l2: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l3: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l4: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l5: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' }
        },
        {
            time: '08:55',
            l1: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l2: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l3: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l4: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' },
            l5: { name: 'Algebra', teacher: 'teacher', classRoom: '25 room', group: '11 A' }
        }


    ];

    constructor() {
    }

    /*constructor(private studentTimetableService: StudentTimetableService) {
    }*/

    ngOnInit(): void {
    }

    /*getAllData() {
        this.studentTimetableService.getAllLessons(2, 'E2019_2020').subscribe(res => {
            this.dataSource = res;
        });
    }*/

}
