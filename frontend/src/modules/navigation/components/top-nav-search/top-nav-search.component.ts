import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-top-nav-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-search.component.html',
    styleUrls: ['top-nav-search.component.scss'],
})
export class TopNavSearchComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
