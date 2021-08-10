import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';

@Component({
    selector: 'sbpro-alert',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './alert.component.html',
    styleUrls: ['alert.component.scss'],
})
export class AlertComponent implements OnInit {
    @Input() classes!: string;
    @Input() dismissable = false;
    @Input() heading!: string;
    @Input() icon = false;
    @Output() closed = new EventEmitter<void>();

    dismissed = false;
    constructor() {}
    ngOnInit() {}

    closeAlert() {
        this.dismissed = true;
        this.closed.emit();
    }
}
