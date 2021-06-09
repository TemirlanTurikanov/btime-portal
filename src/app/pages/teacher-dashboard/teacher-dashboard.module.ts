import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeacherDashboardComponent} from './teacher-dashboard.component';
import {TeacherDashboardRoutingModule} from './teacher-dashboard-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {TTodayTimetableComponent} from './t-today-timetable/t-today-timetable.component';
import {TMyGroupListComponent} from './t-my-group-list/t-my-group-list.component';
import {MatCardModule} from '@angular/material/card';
import {TeacherSchedulerComponent} from '../teacher-scheduler/teacher-scheduler.component';
import {TLessonItemComponent} from '../teacher-scheduler/t-lesson-item/t-lesson-item.component';
import {TeacherSchedulerRoutingModule} from '../teacher-scheduler/teacher-scheduler-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';


@NgModule({
    declarations: [
        TeacherDashboardComponent,
        TTodayTimetableComponent,
        TMyGroupListComponent
    ],
    imports: [
        CommonModule, TeacherDashboardRoutingModule, MatToolbarModule, SharedModule, MatTabsModule, MatCardModule, MatExpansionModule, MatListModule
    ],
    exports: [
        TTodayTimetableComponent,
        TMyGroupListComponent
    ]
})
export class TeacherDashboardModule {
}
