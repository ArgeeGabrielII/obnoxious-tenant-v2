import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-headers-simplified',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './headers-simplified.component.html',
    styleUrls: ['headers-simplified.component.scss'],
})
export class HeadersSimplifiedComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
