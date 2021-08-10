import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-top-nav-docs',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-docs.component.html',
    styleUrls: ['top-nav-docs.component.scss'],
})
export class TopNavDocsComponent implements OnInit {
    @Input() placement = 'bottom-end';
    dropdownClasses: string[] = [];
    constructor() {}
    ngOnInit() {}
}
