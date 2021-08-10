import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CardBase } from '@common/classes';

@Component({
    selector: 'sbpro-card-icon',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './card-icon.component.html',
    styleUrls: ['card-icon.component.scss'],
})
export class CardIconComponent extends CardBase implements OnInit {
    @Input() iconBackground = 'bg-primary';

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
