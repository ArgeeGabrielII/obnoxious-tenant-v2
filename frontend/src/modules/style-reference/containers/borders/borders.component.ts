import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-borders',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './borders.component.html',
    styleUrls: ['borders.component.scss'],
})
export class BordersComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Default' },
        { title: 'Colors' },
        { title: 'Radius' },
        { title: 'Radius Size' },
        { title: 'Thickness' },
        { title: 'Usage Examples' },
    ];
    constructor() {}
    ngOnInit() {}
}
