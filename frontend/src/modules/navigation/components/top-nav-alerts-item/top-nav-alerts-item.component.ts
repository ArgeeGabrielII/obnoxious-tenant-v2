import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Alert } from '@modules/alerts/models';

@Component({
    selector: 'sbpro-top-nav-alerts-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-alerts-item.component.html',
    styleUrls: ['top-nav-alerts-item.component.scss'],
})
export class TopNavAlertsItemComponent implements OnInit {
    @Input() alert!: Alert;
    constructor() {}
    ngOnInit() {}
}
