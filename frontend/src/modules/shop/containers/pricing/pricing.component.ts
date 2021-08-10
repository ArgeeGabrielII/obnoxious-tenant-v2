import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-pricing',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './pricing.component.html',
    styleUrls: ['pricing.component.scss'],
})
export class PricingComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
