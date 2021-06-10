import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile.component';
import {StudentProfileRoutingModule} from './student-profile-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    StudentProfileComponent
  ],
  imports: [
    CommonModule,
    StudentProfileRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule
  ]
})
export class StudentProfileModule { }
