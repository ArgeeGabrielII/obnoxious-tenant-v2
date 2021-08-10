import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-multi-click-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-multi-click-cards.component.html',
    styleUrls: ['dashboard-multi-click-cards.component.scss'],
})
export class DashboardMultiClickCardsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
