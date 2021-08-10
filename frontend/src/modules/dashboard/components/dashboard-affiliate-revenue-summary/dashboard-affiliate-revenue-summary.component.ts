import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-affiliate-revenue-summary',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-affiliate-revenue-summary.component.html',
    styleUrls: ['dashboard-affiliate-revenue-summary.component.scss'],
})
export class DashboardAffiliateRevenueSummaryComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
