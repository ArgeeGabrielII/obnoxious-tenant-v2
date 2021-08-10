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
            title: 'Login - SB Admin Pro Angular',
        } as SBRouteData,
    },
    {
        path: 'register',
        canActivate: [],
        component: authContainers.RegisterComponent,
        data: {
            title: 'Register - SB Admin Pro Angular',
        } as SBRouteData,
    },
    {
        path: 'forgot-password',
        canActivate: [],
        component: authContainers.ForgotPasswordComponent,
        data: {
            title: 'Forgot Password - SB Admin Pro Angular',
        } as SBRouteData,
    },
    {
        path: 'login-social',
        canActivate: [],
        component: authContainers.LoginSocialComponent,
        data: {
            title: 'Login Social - SB Admin Pro Angular',
        } as SBRouteData,
    },
    {
        path: 'register-social',
        canActivate: [],
        component: authContainers.RegisterSocialComponent,
        data: {
            title: 'Register Social - SB Admin Pro Angular',
        } as SBRouteData,
    },
    {
        path: 'forgot-password-social',
        canActivate: [],
        component: authContainers.ForgotPasswordSocialComponent,
        data: {
            title: 'Forgot Password Social - SB Admin Pro Angular',
        } as SBRouteData,
    },
    {
        path: 'multi-tenant-select',
        canActivate: [],
        component: authContainers.MultiTenantSelectComponent,
        data: {
            title: 'Multi-Tenant Select - SB Admin Pro Angular',
        } as SBRouteData,
    },
    {
        path: 'multi-tenant-add-users',
        canActivate: [],
        component: authContainers.MultiTenantAddUsersComponent,
        data: {
            title: 'Multi-Tenant Add Users - SB Admin Pro Angular',
        } as SBRouteData,
    },
    {
        path: 'org-create',
        canActivate: [],
        component: authContainers.OrgCreateComponent,
        data: {
            title: 'Org Create - SB Admin Pro Angular',
        } as SBRouteData,
    },
    {
        path: 'org-join',
        canActivate: [],
        component: authContainers.OrgJoinComponent,
        data: {
            title: 'Org Join - SB Admin Pro Angular',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [AuthModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
