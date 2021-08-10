import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-background-grayscale',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './background-grayscale.component.html',
    styleUrls: ['background-grayscale.component.scss'],
})
export class BackgroundGrayscaleComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
