import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-multi-image-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-multi-image-cards.component.html',
    styleUrls: ['dashboard-multi-image-cards.component.scss'],
})
export class DashboardMultiImageCardsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
