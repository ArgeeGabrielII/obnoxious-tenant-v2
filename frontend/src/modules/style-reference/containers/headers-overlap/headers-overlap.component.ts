import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-headers-overlap',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './headers-overlap.component.html',
    styleUrls: ['headers-overlap.component.scss'],
})
export class HeadersOverlapComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
