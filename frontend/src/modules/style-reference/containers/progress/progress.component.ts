import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-progress',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './progress.component.html',
    styleUrls: ['progress.component.scss'],
})
export class ProgressComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Default' },
        { title: 'Labels' },
        { title: 'Colors' },
        { title: 'Striped' },
        { title: 'Card' },
    ];

    constructor() {}
    ngOnInit() {}
}
