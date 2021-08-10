import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-starter-minimal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './starter-minimal.component.html',
    styleUrls: ['starter-minimal.component.scss'],
})
export class StarterMinimalComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
