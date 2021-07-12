import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BpmProcessComponent} from './bpm-process.component';
import {MatTabsModule} from '@angular/material/tabs';
import {SharedModule} from '../../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {StudentDashboardModule} from '../student-dashboard/student-dashboard.module';
import {BpmProcessRoutingModule} from './bpm-process-routing-module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile.component';
import {StudentProfileRoutingModule} from './student-profile-routing.module';*/


@NgModule({
    declarations: [
        BpmProcessComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        SharedModule,
        MatToolbarModule,
        BpmProcessRoutingModule,
        MatCardModule,
        MatTableModule
    ]
})
export class BpmProcessModule {
}
