import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-borders-default',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './borders-default.component.html',
    styleUrls: ['borders-default.component.scss'],
})
export class BordersDefaultComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
