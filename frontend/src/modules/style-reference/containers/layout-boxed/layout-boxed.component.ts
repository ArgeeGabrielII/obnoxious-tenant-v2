import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-layout-boxed',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-boxed.component.html',
    styleUrls: ['layout-boxed.component.scss'],
})
export class LayoutBoxedComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
