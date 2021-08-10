import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CardBase } from '@common/classes';

@Component({
    selector: 'sbpro-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './card.component.html',
    styleUrls: ['card.component.scss'],
})
export class CardComponent extends CardBase implements OnInit {
    @Input() headerActions!: boolean;
    @Input() scrollable = false;
    @Input() styled!: 'waves' | 'angles' | undefined;

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
        if (this.headerActions) {
            this.cardClasses.push('card-header-actions');
            this.cardClasses.push('h-100');
        }
        if (this.scrollable) {
            this.cardClasses.push('card-scrollable');
        }
        if (this.styled) {
            this.cardClasses.push(`card-${this.styled}`);
        }
    }
}
