import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-steps',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './steps.component.html',
    styleUrls: ['steps.component.scss'],
})
export class StepsComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Basic' },
        { title: 'Sizing' },
        { title: 'Colors' },
        { title: 'Items' },
    ];
    constructor() {}
    ngOnInit() {}
}
