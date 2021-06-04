import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDashboardComponent} from './student-dashboard.component';
import {StudentDashboardRoutingModule} from './student-dashboard-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {TodayTimetableComponent} from './today-timetable/today-timetable.component';
import {MyLessonsListComponent} from './my-lessons-list/my-lessons-list.component';


@NgModule({
    declarations: [
        StudentDashboardComponent,
        TodayTimetableComponent,
        MyLessonsListComponent
    ],
    imports: [
        CommonModule,
        StudentDashboardRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatTabsModule
    ],
    exports: [
        TodayTimetableComponent,
        MyLessonsListComponent
    ]
})
export class StudentDashboardModule {
}
