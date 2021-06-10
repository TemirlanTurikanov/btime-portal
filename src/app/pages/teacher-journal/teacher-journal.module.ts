import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeacherJournalComponent} from './teacher-journal.component';
import {TeacherJournalRoutingModule} from './teacher-journal-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    declarations: [
        TeacherJournalComponent
    ],
    imports: [
        CommonModule,
        TeacherJournalRoutingModule,
        MatToolbarModule,
        SharedModule,
        MatCardModule,
        MatTableModule
    ]
})
export class TeacherJournalModule {
}
