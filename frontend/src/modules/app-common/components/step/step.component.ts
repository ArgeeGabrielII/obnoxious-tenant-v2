import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { SBThemeColors } from '@common/models';

@Component({
    selector: 'sbpro-step',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './step.component.html',
    styleUrls: ['step.component.scss'],
})
export class StepComponent implements OnInit {
    @Input() active!: number;
    @Input() steps!: string[];
    @Input() large = false;
    @Input() color!: SBThemeColors | undefined;

    @Output() stepClicked = new EventEmitter<number>();

    stepClasses: string[] = [];

    constructor() {}

    ngOnInit() {
        if (this.large) {
            this.stepClasses.push('step-lg');
        }
        if (this.color) {
            this.stepClasses.push(`step-${this.color}`);
        }
    }
}
