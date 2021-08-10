import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-layout-fluid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-fluid.component.html',
    styleUrls: ['layout-fluid.component.scss'],
})
export class LayoutFluidComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
