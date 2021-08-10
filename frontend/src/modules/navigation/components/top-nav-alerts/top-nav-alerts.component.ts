import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AlertsService } from '@modules/alerts/services';

@Component({
    selector: 'sbpro-top-nav-alerts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-alerts.component.html',
    styleUrls: ['top-nav-alerts.component.scss'],
})
export class TopNavAlertsComponent implements OnInit {
    @Input() placement = 'bottom-end';
    dropdownClasses: string[] = [];
    constructor(public alertsService: AlertsService) {}
    ngOnInit() {}
}
