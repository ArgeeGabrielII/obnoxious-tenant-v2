import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-error-400',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './error-400.component.html',
    styleUrls: ['error-400.component.scss'],
})
export class Error400Component implements OnInit {
    constructor() {}
    ngOnInit() {}
}
