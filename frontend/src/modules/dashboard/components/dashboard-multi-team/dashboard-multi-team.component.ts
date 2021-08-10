import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-multi-team',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-multi-team.component.html',
    styleUrls: ['dashboard-multi-team.component.scss'],
})
export class DashboardMultiTeamComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
