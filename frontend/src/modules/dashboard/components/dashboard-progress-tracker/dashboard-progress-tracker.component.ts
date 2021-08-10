import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-progress-tracker',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-progress-tracker.component.html',
    styleUrls: ['dashboard-progress-tracker.component.scss'],
})
export class DashboardProgressTrackerComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
