import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-home-1',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home-1.component.html',
    styleUrls: ['home-1.component.scss'],
})
export class Home1Component implements OnInit {
    constructor() {}
    ngOnInit() {}
}
