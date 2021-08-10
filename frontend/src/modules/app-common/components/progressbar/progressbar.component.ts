import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-progress-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './progressbar.component.html',
    styleUrls: ['progressbar.component.scss'],
})
export class ProgressbarComponent implements OnInit {
    @Input() value!: number;
    @Input() bgColor = 'bg-primary';
    @Input() striped = false;
    @Input() animated = false;

    progressBarClasses: string[] = [];

    constructor() {}
    ngOnInit() {
        this.progressBarClasses.push(this.bgColor);
        if (this.striped) {
            this.progressBarClasses.push('progress-bar-striped');
        }
        if (this.animated) {
            this.progressBarClasses.push('progress-bar-animated');
        }
    }
}
