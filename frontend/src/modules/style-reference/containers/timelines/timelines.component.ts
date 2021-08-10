import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-timelines',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './timelines.component.html',
    styleUrls: ['timelines.component.scss'],
})
export class TimelinesComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Basic Timeline' },
        { title: 'Small Timeline' },
        { title: 'Extra Small Timeline' },
        { title: 'Styled Timeline' },
    ];
    constructor() {}
    ngOnInit() {}
}
