import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards.component.html',
    styleUrls: ['cards.component.scss'],
})
export class CardsComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Basic' },
        {
            title: 'Advanced',
            children: [
                { title: 'Header Dropdown' },
                { title: 'Header Icons' },
                { title: 'Header Button' },
                { title: 'Header Input' },
            ],
        },
        { title: 'Collapsable' },
        {
            title: 'Navigation',
            children: [{ title: 'Tabs' }, { title: 'Pills' }, { title: 'Pills (Vertical)' }],
        },
        { title: 'Scrollable' },
        { title: 'Images' },
        {
            title: 'Styled',
            children: [{ title: 'Waves' }, { title: 'Angles' }],
            new: true,
        },
        { title: 'Icons' },
        { title: 'Colors' },
    ];
    constructor() {}
    ngOnInit() {}
}
