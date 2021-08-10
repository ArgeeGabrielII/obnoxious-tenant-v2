import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-shadows-extended',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './shadows-extended.component.html',
    styleUrls: ['shadows-extended.component.scss'],
})
export class ShadowsExtendedComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
