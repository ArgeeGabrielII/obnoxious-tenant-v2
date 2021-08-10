import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then((m) => m.ChartsRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                (m) => m.DashboardRoutingModule
            ),
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
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then((m) => m.ErrorRoutingModule),
    },
    {
        path: 'knowledge-base',
        loadChildren: () =>
            import('modules/knowledge-base/knowledge-base-routing.module').then(
                (m) => m.KnowledgeBaseRoutingModule
            ),
    },
    {
        path: 'shop',
        loadChildren: () =>
            import('modules/shop/shop-routing.module').then((m) => m.ShopRoutingModule),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then((m) => m.TablesRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/app-common/app-common-routing.module').then(
                (m) => m.AppCommonRoutingModule
            ),
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
