import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-lift',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './lift.component.html',
    styleUrls: ['lift.component.scss'],
})
export class LiftComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [{ title: 'Lift Base' }, { title: 'Lift Sizing' }];
    constructor() {}
    ngOnInit() {}
}
