import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-background',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './background.component.html',
    styleUrls: ['background.component.scss'],
})
export class BackgroundComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Default' },
        { title: 'Expanded' },
        { title: 'Gradient' },
        { title: 'Grayscale' },
        { title: 'Images' },
        {
            title: 'Overlay',
            children: [
                { title: 'Opacity' },
                { title: 'Colors' },
                { title: 'Combining Overlay Utilities' },
            ],
        },
    ];
    constructor() {}
    ngOnInit() {}
}
