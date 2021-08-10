import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-avatars',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './avatars.component.html',
    styleUrls: ['avatars.component.scss'],
})
export class AvatarsComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [{ title: 'Sizing' }, { title: 'Status Indicators' }];
    constructor() {}
    ngOnInit() {}
}
