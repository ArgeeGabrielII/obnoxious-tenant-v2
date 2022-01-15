import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-account-tables',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './account-tables.component.html',
    styleUrls: ['account-tables.component.scss'],
})
export class AccountTablesComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
