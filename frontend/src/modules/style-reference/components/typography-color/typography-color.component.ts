import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-typography-color',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './typography-color.component.html',
    styleUrls: ['typography-color.component.scss'],
})
export class TypographyColorComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
