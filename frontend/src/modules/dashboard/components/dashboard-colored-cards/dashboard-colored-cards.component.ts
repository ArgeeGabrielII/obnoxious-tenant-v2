import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-colored-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-colored-cards.component.html',
    styleUrls: ['dashboard-colored-cards.component.scss'],
})
export class DashboardColoredCardsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
