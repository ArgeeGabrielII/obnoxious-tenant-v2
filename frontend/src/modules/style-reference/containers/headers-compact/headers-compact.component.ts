import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-headers-compact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './headers-compact.component.html',
    styleUrls: ['headers-compact.component.scss'],
})
export class HeadersCompactComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
