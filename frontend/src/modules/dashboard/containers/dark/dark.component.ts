import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dark',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dark.component.html',
    styleUrls: ['dark.component.scss'],
})
export class DarkComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
