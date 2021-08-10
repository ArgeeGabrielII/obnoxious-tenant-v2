import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-billing',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './billing.component.html',
    styleUrls: ['billing.component.scss'],
})
export class BillingComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
