import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../modules/auth/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/login',
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then((m) => m.DashboardRoutingModule),
    },
    {
        path: 'account',
        loadChildren: () =>
            import('modules/account/account-routing.module').then((m) => m.AccountRoutingModule),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then((m) => m.AuthRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/app-common/app-common-routing.module').then((m) => m.AppCommonRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then((m) => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            relativeLinkResolution: 'legacy',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
