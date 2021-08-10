import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-recent-activity',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-recent-activity.component.html',
    styleUrls: ['dashboard-recent-activity.component.scss'],
})
export class DashboardRecentActivityComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
