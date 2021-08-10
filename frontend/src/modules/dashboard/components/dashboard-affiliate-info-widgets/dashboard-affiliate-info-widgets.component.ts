import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-affiliate-info-widgets',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-affiliate-info-widgets.component.html',
    styleUrls: ['dashboard-affiliate-info-widgets.component.scss'],
})
export class DashboardAffiliateInfoWidgetsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
