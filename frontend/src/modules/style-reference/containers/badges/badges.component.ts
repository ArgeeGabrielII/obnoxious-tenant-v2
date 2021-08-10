import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-badges',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badges.component.html',
    styleUrls: ['badges.component.scss'],
})
export class BadgesComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [{ title: 'Default' }, { title: 'Extended' }, { title: 'Sizing' }];
    constructor() {}
    ngOnInit() {}
}
