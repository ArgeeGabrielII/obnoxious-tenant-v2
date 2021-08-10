import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-overview',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-overview.component.html',
    styleUrls: ['dashboard-overview.component.scss'],
})
export class DashboardOverviewComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
