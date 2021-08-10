import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-multi-people',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-multi-people.component.html',
    styleUrls: ['dashboard-multi-people.component.scss'],
})
export class DashboardMultiPeopleComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
