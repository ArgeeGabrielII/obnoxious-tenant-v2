import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-headers-light',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './headers-light.component.html',
    styleUrls: ['headers-light.component.scss'],
})
export class HeadersLightComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
