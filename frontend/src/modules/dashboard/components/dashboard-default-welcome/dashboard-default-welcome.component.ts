import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-default-welcome',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-default-welcome.component.html',
    styleUrls: ['dashboard-default-welcome.component.scss'],
})
export class DashboardDefaultWelcomeComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
