import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-headers-breadcrumbs',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './headers-breadcrumbs.component.html',
    styleUrls: ['headers-breadcrumbs.component.scss'],
})
export class HeadersBreadcrumbsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
