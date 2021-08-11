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
import * as knowledgeBaseContainers from '@modules/knowledge-base/containers';
import * as shopContainers from '@modules/shop/containers';
import * as styleReferenceContainers from '@modules/style-reference/containers';

/* Guards */
import * as dashboardGuards from './guards';

import { styleReferenceRouteVariables } from '@modules/style-reference/models';

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
                path: 'components',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'alerts',
                    },
                    ...styleReferenceRouteVariables.components.map((value) => ({
                        path: value.name,
                        data: {
                            title: `${value.title} - Obnoxious Tenant`,
                            breadcrumbs: [
                                {
                                    text: 'Dashboard',
                                    link: '/dashboard',
                                },
                                {
                                    text: value.title,
                                    active: true,
                                },
                            ],
                        } as SBRouteData,
                        component: value.component,
                    })),
                ],
            },
            {
                path: 'utilities',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'animations',
                    },
                    ...styleReferenceRouteVariables.utilities.map((value) => ({
                        path: value.name,
                        data: {
                            title: `${value.title} - Obnoxious Tenant`,
                            breadcrumbs: [
                                {
                                    text: 'Dashboard',
                                    link: '/dashboard',
                                },
                                {
                                    text: value.title,
                                    active: true,
                                },
                            ],
                        } as SBRouteData,
                        component: value.component,
                    })),
                ],
            },
            {
                path: 'page-headers',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'simplified',
                    },
                    ...styleReferenceRouteVariables.pageHeaders.map((value) => ({
                        path: value.name,
                        data: {
                            title: `${value.title} - Obnoxious Tenant`,
                            breadcrumbs: [
                                {
                                    text: 'Dashboard',
                                    link: '/dashboard',
                                },
                                {
                                    text: value.title,
                                    active: true,
                                },
                            ],
                        } as SBRouteData,
                        component: value.component,
                    })),
                ],
            },
            {
                path: 'pages',
                children: [
                    {
                        path: 'blank',
                        canActivate: [],
                        component: styleReferenceContainers.BlankComponent,
                        data: {
                            title: 'Pages Blank - Obnoxious Tenant',
                            breadcrumbs: [
                                {
                                    text: 'Dashboard',
                                    link: '/dashboard',
                                },
                                {
                                    text: 'Blank',
                                    active: true,
                                },
                            ],
                        } as SBRouteData,
                    },
                    {
                        path: 'starter-minimal',
                        canActivate: [],
                        component: styleReferenceContainers.StarterMinimalComponent,
                        data: {
                            title: 'Starter Minimal - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                    {
                        path: 'layout-boxed',
                        canActivate: [],
                        component: styleReferenceContainers.LayoutBoxedComponent,
                        data: {
                            title: 'Layout Boxed - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                    {
                        path: 'layout-fluid',
                        canActivate: [],
                        component: styleReferenceContainers.LayoutFluidComponent,
                        data: {
                            title: 'Layout Fluid - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                ],
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
                        path: 'billing',
                        canActivate: [],
                        component: accountContainers.BillingComponent,
                        data: {
                            title: 'Billing - Obnoxious Tenant',
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
                path: 'knowledge-base',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'home-1',
                    },
                    {
                        path: 'home-1',
                        canActivate: [],
                        component: knowledgeBaseContainers.Home1Component,
                        data: {
                            title: 'Home - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                    {
                        path: 'home-2',
                        canActivate: [],
                        component: knowledgeBaseContainers.Home2Component,
                        data: {
                            title: 'Home - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                    {
                        path: 'category',
                        canActivate: [],
                        component: knowledgeBaseContainers.CategoryComponent,
                        data: {
                            title: 'Category - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                    {
                        path: 'article',
                        canActivate: [],
                        component: knowledgeBaseContainers.ArticleComponent,
                        data: {
                            title: 'Article - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                ],
            },
            {
                path: 'shop',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'pricing',
                    },
                    {
                        path: 'pricing',
                        canActivate: [],
                        component: shopContainers.PricingComponent,
                        data: {
                            title: 'Pricing - Obnoxious Tenant',
                        } as SBRouteData,
                    },
                    {
                        path: 'invoice',
                        canActivate: [],
                        component: shopContainers.InvoiceComponent,
                        data: {
                            title: 'Invoice - Obnoxious Tenant',
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
