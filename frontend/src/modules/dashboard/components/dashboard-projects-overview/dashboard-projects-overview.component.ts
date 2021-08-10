import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-projects-overview',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-projects-overview.component.html',
    styleUrls: ['dashboard-projects-overview.component.scss'],
})
export class DashboardProjectsOverviewComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
