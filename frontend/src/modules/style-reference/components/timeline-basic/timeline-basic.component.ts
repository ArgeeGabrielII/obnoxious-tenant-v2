import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TimelineData } from '@common/models';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-timeline-basic',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './timeline-basic.component.html',
    styleUrls: ['timeline-basic.component.scss'],
})
export class TimelineBasicComponent implements OnInit {
    timeline: TimelineData[] = [
        {
            markerText: '01/01/2020',
            itemContent: 'This is the content for the first timeline item.',
        },
        {
            markerText: '02/02/2020',
            itemContent: 'A second timeline item comes after the first item.',
        },
        {
            markerText: '03/03/2020',
            itemContent: 'The first and last items do not extend the border to the next marker.',
        },
        {
            markerText: '04/04/2020',
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
    [timeline]='timeline'
)
`.trim();

const tsCode = `
// In Component Class:
timeline: TimelineData[] = [
    {
        markerText: '01/01/2020',
        itemContent: 'This is the content for the first timeline item.',
    },
    {
        markerText: '02/02/2020',
        itemContent: 'A second timeline item comes after the first item.',
    },
    {
        markerText: '03/03/2020',
        itemContent: 'The first and last items do not extend the border to the next marker.',
    },
    {
        markerText: '04/04/2020',
        itemContent: \`This is the last item. The last item will not show a line after it's respective timeline marker.\`,
    },
].map((data) => ({ ...data, markerFeatherIcon: 'check' }));
`.trim();
