import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-typography-weight',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './typography-weight.component.html',
    styleUrls: ['typography-weight.component.scss'],
})
export class TypographyWeightComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
