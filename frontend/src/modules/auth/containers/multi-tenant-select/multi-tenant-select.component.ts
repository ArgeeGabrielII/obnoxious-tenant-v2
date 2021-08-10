import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-multi-tenant-select',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './multi-tenant-select.component.html',
    styleUrls: ['multi-tenant-select.component.scss'],
})
export class MultiTenantSelectComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
