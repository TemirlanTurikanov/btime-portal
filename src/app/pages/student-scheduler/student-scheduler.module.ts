import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentSchedulerComponent} from './student-scheduler.component';
import {StudentSchedulerRoutingModule} from './student-scheduler-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {TablesRoutingModule} from '../tables/tables-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LessonItemComponent} from './lesson-item/lesson-item.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
    declarations: [
        StudentSchedulerComponent,
        LessonItemComponent
    ],
    imports: [
        CommonModule,
        StudentSchedulerRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatTabsModule,
        MatTableModule,
        TablesRoutingModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatFormFieldModule,
        SharedModule,
        MatListModule
    ],
    exports: [LessonItemComponent]
})
export class StudentSchedulerModule {
}
