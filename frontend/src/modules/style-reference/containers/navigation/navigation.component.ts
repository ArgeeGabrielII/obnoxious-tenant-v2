import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-navigation',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './navigation.component.html',
    styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [{ title: 'Side Navigation' }, { title: 'Sticky Navigation' }];
    constructor() {}
    ngOnInit() {}
}
