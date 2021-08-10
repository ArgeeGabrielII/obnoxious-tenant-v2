import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-modal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './modal.component.html',
    styleUrls: ['modal.component.scss'],
})
export class ModalComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Default' },
        { title: 'Scrollable' },
        { title: 'Vertically Centered' },
        { title: 'Sizing' },
    ];

    constructor() {}
    ngOnInit() {}
}
