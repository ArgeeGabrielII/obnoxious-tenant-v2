import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { SBThemeColors, TimelineData } from '@common/models';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-timeline-styled',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './timeline-styled.component.html',
    styleUrls: ['timeline-styled.component.scss'],
})
export class TimelineStyledComponent implements OnInit, AfterViewInit {
    @ViewChild('itemTemplate1') itemTemplate1!: TemplateRef<unknown>;
    @ViewChild('itemTemplate2') itemTemplate2!: TemplateRef<unknown>;
    @ViewChild('itemTemplate3') itemTemplate3!: TemplateRef<unknown>;
    @ViewChild('itemTemplate4') itemTemplate4!: TemplateRef<unknown>;
    timeline!: TimelineData[];
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

    constructor(private changeDetectorRef: ChangeDetectorRef) {}
    ngOnInit() {}
    ngAfterViewInit() {
        this.timeline = [
            {
                markerText: '01/01/2020',
                itemTemplate: this.itemTemplate1,
                markerFeatherIcon: 'flag',
                markerColor: 'primary-soft',
                markerIndicatorTextColor: 'primary',
            },
            {
                markerText: '02/02/2020',
                itemTemplate: this.itemTemplate2,
                markerFeatherIcon: 'gift',
                markerColor: 'success-soft',
                markerIndicatorTextColor: 'success',
            },
            {
                markerText: '03/03/2020',
                itemTemplate: this.itemTemplate3,
                markerFeatherIcon: 'map',
                markerColor: 'secondary-soft',
                markerIndicatorTextColor: 'secondary',
            },
            {
                markerText: '04/04/2020',
                itemTemplate: this.itemTemplate4,
                markerFeatherIcon: 'send',
                markerColor: 'warning-soft',
                markerIndicatorTextColor: 'warning',
            },
        ] as TimelineData[];
        this.changeDetectorRef.detectChanges();
    }
}

const pugCode = `
sbpro-timeline(
    *ngIf='timeline',
    [timeline]='timeline'
)

ng-template(#itemTemplate1)
    .card.shadow-sm
        .card-body
            h5.text-primary Beginning
            p.
                This is the content for the first timeline item. ...

ng-template(#itemTemplate2)
    .card.shadow-sm
        .card-body
            h5.text-success Second Item
            p.
                This is the content for the second timeline item. ...

ng-template(#itemTemplate3)
    .card.shadow-sm
        .card-body
            h5.text-secondary Third Item
            p.
                This is the content for the third timeline item. ...

ng-template(#itemTemplate4)
    .card.shadow-sm
        .card-body
            h5.text-warning Last Item
            p.
                You can use different icons in the icon markers, letters ...

`.trim();

const tsCode = `
// In Component Class:
ngAfterViewInit() {
    this.timeline = [
        {
            markerText: '01/01/2020',
            itemTemplate: this.itemTemplate1,
            markerFeatherIcon: 'flag',
            markerColor: 'primary-soft',
            markerIndicatorTextColor: 'primary',
        },
        {
            markerText: '02/02/2020',
            itemTemplate: this.itemTemplate2,
            markerFeatherIcon: 'gift',
            markerColor: 'success-soft',
            markerIndicatorTextColor: 'success',
        },
        {
            markerText: '03/03/2020',
            itemTemplate: this.itemTemplate3,
            markerFeatherIcon: 'map',
            markerColor: 'secondary-soft',
            markerIndicatorTextColor: 'secondary',
        },
        {
            markerText: '04/04/2020',
            itemTemplate: this.itemTemplate4,
            markerFeatherIcon: 'send',
            markerColor: 'warning-soft',
            markerIndicatorTextColor: 'warning',
        },
    ] as TimelineData[];
    this.changeDetectorRef.detectChanges();
}
`.trim();
