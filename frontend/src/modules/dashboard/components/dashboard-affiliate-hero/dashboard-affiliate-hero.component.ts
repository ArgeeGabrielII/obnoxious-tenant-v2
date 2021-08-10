import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-affiliate-hero',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-affiliate-hero.component.html',
    styleUrls: ['dashboard-affiliate-hero.component.scss'],
})
export class DashboardAffiliateHeroComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
