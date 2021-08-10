import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-blank',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './blank.component.html',
    styleUrls: ['blank.component.scss'],
})
export class BlankComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
