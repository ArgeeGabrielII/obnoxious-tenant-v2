import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-shadows-default',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './shadows-default.component.html',
    styleUrls: ['shadows-default.component.scss'],
})
export class ShadowsDefaultComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
