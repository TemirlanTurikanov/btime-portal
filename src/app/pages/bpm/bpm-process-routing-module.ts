import {BpmProcessComponent} from './bpm-process.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component: BpmProcessComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class BpmProcessRoutingModule{
}
