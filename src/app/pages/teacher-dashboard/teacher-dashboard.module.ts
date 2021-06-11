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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';


@NgModule({
    declarations: [
        TeacherDashboardComponent,
        TTodayTimetableComponent,
        TMyGroupListComponent
    ],
    imports: [
        // tslint:disable-next-line:max-line-length
        CommonModule, TeacherDashboardRoutingModule, MatToolbarModule, SharedModule, MatTabsModule, MatCardModule, MatExpansionModule, MatListModule
    ],
    exports: [
        TTodayTimetableComponent,
        TMyGroupListComponent
    ]
})
export class TeacherDashboardModule {
}
