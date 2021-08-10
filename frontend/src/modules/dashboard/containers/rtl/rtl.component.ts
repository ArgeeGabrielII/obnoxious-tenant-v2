import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-rtl',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './rtl.component.html',
    styleUrls: ['rtl.component.scss'],
})
export class RtlComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
