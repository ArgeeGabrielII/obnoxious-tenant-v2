import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-affiliate-reports',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-affiliate-reports.component.html',
    styleUrls: ['dashboard-affiliate-reports.component.scss'],
})
export class DashboardAffiliateReportsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
