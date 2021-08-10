import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-buttons',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './buttons.component.html',
    styleUrls: ['buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Default Colors' },
        { title: 'Custom Colors' },
        { title: 'Icon' },
        { title: 'Transparent' },
        { title: 'Sizing' },
        { title: 'Social' },
        { title: 'Extending' },
    ];
    constructor() {}
    ngOnInit() {}
}
