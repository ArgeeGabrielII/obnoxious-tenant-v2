/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { AuthModule } from './auth.module';

/* Containers */
import * as authContainers from './containers';

/* Guards */
import * as authGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'login',
        canActivate: [],
        component: authContainers.LoginComponent,
        data: {
            title: 'Login - Obnoxious Tenant',
        } as SBRouteData,
    },
    {
        path: 'register',
        canActivate: [],
        component: authContainers.RegisterComponent,
        data: {
            title: 'Register - Obnoxious Tenant',
        } as SBRouteData,
    },
    {
        path: 'forgot-password',
        canActivate: [],
        component: authContainers.ForgotPasswordComponent,
        data: {
            title: 'Forgot Password - Obnoxious Tenant',
        } as SBRouteData,
    },
    {
        path: 'multi-tenant-select',
        canActivate: [],
        component: authContainers.MultiTenantSelectComponent,
        data: {
            title: 'Multi-Tenant Select - Obnoxious Tenant',
        } as SBRouteData,
    },
    {
        path: 'multi-tenant-add-users',
        canActivate: [],
        component: authContainers.MultiTenantAddUsersComponent,
        data: {
            title: 'Multi-Tenant Add Users - Obnoxious Tenant',
        } as SBRouteData,
    },
    {
        path: 'org-create',
        canActivate: [],
        component: authContainers.OrgCreateComponent,
        data: {
            title: 'Org Create - Obnoxious Tenant',
        } as SBRouteData,
    },
    {
        path: 'org-join',
        canActivate: [],
        component: authContainers.OrgJoinComponent,
        data: {
            title: 'Org Join - Obnoxious Tenant',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [AuthModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
