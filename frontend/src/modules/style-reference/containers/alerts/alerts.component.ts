import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-alerts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './alerts.component.html',
    styleUrls: ['alerts.component.scss'],
})
export class AlertsComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Default' },
        { title: 'Content' },
        { title: 'Icon' },
        { title: 'Solid' },
        { title: 'Extended' },
    ];
    constructor() {}
    ngOnInit() {}
}
