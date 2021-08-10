import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-tooltips',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tooltips.component.html',
    styleUrls: ['tooltips.component.scss'],
})
export class TooltipsComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [{ title: 'Tooltips' }, { title: 'Popovers' }];

    constructor() {}
    ngOnInit() {}
}
