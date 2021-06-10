import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardPageComponent} from './pages/dashboard/containers';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AuthGuard} from './pages/auth/guards';

const routes: Routes = [
    {
        path: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: DashboardPageComponent
    },
    {
        path: 'typography',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/typography/typography.module').then(m => m.TypographyModule)
    },
    {
        path: 'tables',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
    },
    {
        path: 'student-ws',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/student-dashboard/student-dashboard.module').then(m => m.StudentDashboardModule)
    },
    {
        path: 'student-sh',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/student-scheduler/student-scheduler.module').then(m => m.StudentSchedulerModule)
    },
    {
        path: 'student-pl',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/student-progress-list/student-progress-list.module').then(m => m.StudentProgressListModule)
    },
    {
        path: 'student-pf',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/student-profile/student-profile.module').then(m => m.StudentProfileModule)
    },
    {
        path: 'teacher-sh',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/teacher-scheduler/teacher-scheduler.module').then(m => m.TeacherSchedulerModule)
    },
    {
        path: 'teacher-journal',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/teacher-journal/teacher-journal.module').then(m => m.TeacherJournalModule)
    },
    {
        path: 'teacher-dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/teacher-dashboard/teacher-dashboard.module').then(m => m.TeacherDashboardModule)
    },
    {
        path: 'notification',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule)
    },
    {
        path: 'ui',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/ui-elements/ui-elements.module').then(m => m.UiElementsModule)
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        redirectTo: '404'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            preloadingStrategy: PreloadAllModules,
            relativeLinkResolution: 'legacy'
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
