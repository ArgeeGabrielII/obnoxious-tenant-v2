import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-invoice',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './invoice.component.html',
    styleUrls: ['invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
