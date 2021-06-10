import {StudentProfileComponent} from './student-profile.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component: StudentProfileComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class StudentProfileRoutingModule{
}
