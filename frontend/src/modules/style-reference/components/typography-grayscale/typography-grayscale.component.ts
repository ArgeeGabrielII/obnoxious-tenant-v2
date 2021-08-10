import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-typography-grayscale',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './typography-grayscale.component.html',
    styleUrls: ['typography-grayscale.component.scss'],
})
export class TypographyGrayscaleComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
