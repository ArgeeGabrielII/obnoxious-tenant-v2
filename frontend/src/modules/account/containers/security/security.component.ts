import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-security',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './security.component.html',
    styleUrls: ['security.component.scss'],
})
export class SecurityComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
