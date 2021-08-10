import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TimelineData } from '@common/models';

@Component({
    selector: 'sbpro-timeline',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './timeline.component.html',
    styleUrls: ['timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
    @Input() timeline!: TimelineData;
    @Input() small = false;
    @Input() xs = false;

    timelineClasses: string[] = [];
    constructor() {}
    ngOnInit() {
        if (this.small) {
            this.timelineClasses.push('timeline-sm');
        }
        if (this.xs) {
            this.timelineClasses.push('timeline-xs');
        }
        console.log(this.timeline);
    }
}
