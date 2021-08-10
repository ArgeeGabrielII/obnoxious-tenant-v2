import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CardBase } from '@common/classes';

@Component({
    selector: 'sbpro-card-image',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './card-image.component.html',
    styleUrls: ['card-image.component.scss'],
})
export class CardImageComponent extends CardBase implements OnInit {
    @Input() placement!: 'left' | 'right' | 'top' | 'bottom' | 'overlay';
    @Input() src!: string;
    @Input() alt!: string;

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
