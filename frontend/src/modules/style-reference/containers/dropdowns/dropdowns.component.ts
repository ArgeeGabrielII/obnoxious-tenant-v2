import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-dropdowns',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dropdowns.component.html',
    styleUrls: ['dropdowns.component.scss'],
})
export class DropdownsComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Default' },
        { title: 'Icons' },
        { title: 'Animated' },
        { title: 'Notifications' },
    ];
    constructor() {}
    ngOnInit() {}
}
