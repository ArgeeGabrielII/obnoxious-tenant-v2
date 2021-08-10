import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-multi-projects',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-multi-projects.component.html',
    styleUrls: ['dashboard-multi-projects.component.scss'],
})
export class DashboardMultiProjectsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
