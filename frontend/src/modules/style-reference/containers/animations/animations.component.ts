import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-animations',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './animations.component.html',
    styleUrls: ['animations.component.scss'],
})
export class AnimationsComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [{ title: 'Fade In' }, { title: 'Fade In Up' }];
    constructor() {}
    ngOnInit() {}
}
