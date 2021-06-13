import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routes} from '../../../consts';

@Component({
    selector: 'app-t-lesson-item',
    templateUrl: './t-lesson-item.component.html',
    styleUrls: ['./t-lesson-item.component.css']
})
export class TLessonItemComponent implements OnInit {
    @Input() lessonItem: any;
    public routers: typeof routes = routes;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    goToDashboard() {
        this.router.navigate([this.routers.TEACHER_JOURNAL]);
    }
}
