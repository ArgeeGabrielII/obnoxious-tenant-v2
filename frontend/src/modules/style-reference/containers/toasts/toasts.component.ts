import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-toasts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './toasts.component.html',
    styleUrls: ['toasts.component.scss'],
})
export class ToastsComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [{ title: 'Demo' }, { title: 'Colors' }];

    constructor() {}
    ngOnInit() {}
}
