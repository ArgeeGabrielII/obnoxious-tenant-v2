import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-borders-thickness',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './borders-thickness.component.html',
    styleUrls: ['borders-thickness.component.scss'],
})
export class BordersThicknessComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
