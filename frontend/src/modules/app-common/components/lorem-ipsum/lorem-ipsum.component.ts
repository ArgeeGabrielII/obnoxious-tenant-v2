import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-lorem-ipsum',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './lorem-ipsum.component.html',
    styleUrls: ['lorem-ipsum.component.scss'],
})
export class LoremIpsumComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
