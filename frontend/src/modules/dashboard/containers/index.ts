import { DarkComponent } from './dark/dark.component';
import { DashboardAffiliateComponent } from './dashboard-affiliate/dashboard-affiliate.component';
import { DashboardMultipurposeComponent } from './dashboard-multipurpose/dashboard-multipurpose.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RtlComponent } from './rtl/rtl.component';
import { StaticComponent } from './static/static.component';

export const containers = [
    DashboardComponent,
    StaticComponent,
    DashboardOverviewComponent,
    DarkComponent,
    RtlComponent,
    DashboardMultipurposeComponent,
    DashboardAffiliateComponent,
];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './dashboard-overview/dashboard-overview.component';
export * from './dark/dark.component';
export * from './rtl/rtl.component';
export * from './dashboard-multipurpose/dashboard-multipurpose.component';
export * from './dashboard-affiliate/dashboard-affiliate.component';
