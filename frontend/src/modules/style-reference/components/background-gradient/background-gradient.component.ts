import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-background-gradient',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './background-gradient.component.html',
    styleUrls: ['background-gradient.component.scss'],
})
export class BackgroundGradientComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
