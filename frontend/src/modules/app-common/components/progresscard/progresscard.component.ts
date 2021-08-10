import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CardBase } from '@common/classes';

@Component({
    selector: 'sbpro-progress-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './progresscard.component.html',
    styleUrls: ['progresscard.component.scss'],
})
export class ProgresscardComponent extends CardBase implements OnInit {
    @Input() value!: number;
    @Input() progressBarColor = 'bg-primary';
    @Input() striped = false;
    @Input() animated = false;

    progressBarClasses: string[] = [];

    constructor() {
        super();
    }
    ngOnInit() {
        this.progressBarClasses.push(this.progressBarColor);
        if (this.striped) {
            this.progressBarClasses.push('progress-bar-striped');
        }
        if (this.animated) {
            this.progressBarClasses.push('progress-bar-animated');
        }
    }
}
