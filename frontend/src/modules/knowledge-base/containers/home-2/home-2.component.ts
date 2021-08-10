import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-home-2',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home-2.component.html',
    styleUrls: ['home-2.component.scss'],
})
export class Home2Component implements OnInit {
    constructor() {}
    ngOnInit() {}
}
