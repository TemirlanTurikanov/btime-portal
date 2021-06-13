import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentProgressListComponent} from './student-progress-list.component';
import {StudentProgressListRoutingModule} from './student-progress-list-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    declarations: [
        StudentProgressListComponent
    ],
    imports: [
        CommonModule,
        StudentProgressListRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        SharedModule,
        MatTabsModule,
        MatTableModule
    ]
})
export class StudentProgressListModule {
}
