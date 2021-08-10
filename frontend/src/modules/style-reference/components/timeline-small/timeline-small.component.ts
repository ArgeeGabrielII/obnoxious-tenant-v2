import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TimelineData } from '@common/models';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-timeline-small',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './timeline-small.component.html',
    styleUrls: ['timeline-small.component.scss'],
})
export class TimelineSmallComponent implements OnInit {
    timeline: TimelineData[] = [
        {
            markerText: '01/01',
            itemContent: 'This is the content for the first timeline item.',
        },
        {
            markerText: '02/02',
            itemContent: 'A second timeline item comes after the first item.',
        },
        {
            markerText: '03/03',
            itemContent: 'The first and last items do not extend the border to the next marker.',
        },
        {
            markerText: '04/04',
            itemContent: `This is the last item. The last item will not show a line after it's respective timeline marker.`,
        },
    ].map((data) => ({ ...data, markerFeatherIcon: 'check' }));
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
        {
            language: 'ts',
            code: tsCode,
        },
    ];

    constructor() {}
    ngOnInit() {}
}

const pugCode = `
sbpro-timeline(
    [timeline]='timeline',
    [small]='true'
)
`.trim();

const tsCode = `
// In Component Class:
timeline: TimelineData[] = [
    {
        markerText: '01/01',
        itemContent: 'This is the content for the first timeline item.',
    },
    {
        markerText: '02/02',
        itemContent: 'A second timeline item comes after the first item.',
    },
    {
        markerText: '03/03',
        itemContent: 'The first and last items do not extend the border to the next marker.',
    },
    {
        markerText: '04/04',
        itemContent: \`This is the last item. The last item will not show a line after it's respective timeline marker.\`,
    },
].map((data) => ({ ...data, markerFeatherIcon: 'check' }));
`.trim();
