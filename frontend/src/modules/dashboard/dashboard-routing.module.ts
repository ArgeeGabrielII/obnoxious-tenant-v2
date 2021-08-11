/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { DashboardModule } from './dashboard.module';

/* Containers */
import * as dashboardContainers from './containers';
import * as accountContainers from '@modules/account/containers';
import * as authContainers from '@modules/auth/containers';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: dashboardContainers.DashboardComponent,
        children: [
            {
                path: '',
                data: {
                    title: 'Dashboard - Obnoxious Tenant',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            active: true,
                        },
                    ],
                } as SBRouteData,
                component: dashboardContainers.DashboardOverviewComponent,
            },
            {
                path: 'account',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'profile',
                    },
                    {
                        path: 'profile',
                        canActivate: [],
                        component: accountContainers.ProfileComponent,
                        data: {
                            title: 'Profile - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                    {
                        path: 'security',
                        canActivate: [],
                        component: accountContainers.SecurityComponent,
                        data: {
                            title: 'Security - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                    {
                        path: 'notifications',
                        canActivate: [],
                        component: accountContainers.NotificationsComponent,
                        data: {
                            title: 'Notifications - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                ],
            },
            {
                path: 'auth',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'wizard',
                    },
                    {
                        path: 'wizard',
                        canActivate: [],
                        component: authContainers.WizardComponent,
                        data: {
                            title: 'Wizard - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [DashboardModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
