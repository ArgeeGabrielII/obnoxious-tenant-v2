import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-borders-usage-examples',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './borders-usage-examples.component.html',
    styleUrls: ['borders-usage-examples.component.scss'],
})
export class BordersUsageExamplesComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
