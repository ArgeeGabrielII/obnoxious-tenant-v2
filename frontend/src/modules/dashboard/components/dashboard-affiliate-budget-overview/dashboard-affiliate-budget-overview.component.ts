import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-affiliate-budget-overview',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-affiliate-budget-overview.component.html',
    styleUrls: ['dashboard-affiliate-budget-overview.component.scss'],
})
export class DashboardAffiliateBudgetOverviewComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
