import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-multi-traffic-sources',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-multi-traffic-sources.component.html',
    styleUrls: ['dashboard-multi-traffic-sources.component.scss'],
})
export class DashboardMultiTrafficSourcesComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
