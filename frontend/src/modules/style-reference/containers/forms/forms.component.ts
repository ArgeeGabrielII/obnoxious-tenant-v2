import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-forms',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forms.component.html',
    styleUrls: ['forms.component.scss'],
})
export class FormsComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [
        { title: 'Default Form Controls' },
        { title: 'Solid Form Controls' },
        { title: 'Custom Checkboxes & Radio' },
        { title: 'Solid Checkboxes & Radio' },
        { title: 'Input Groups', new: true },
        { title: 'Date Range Picker', new: true },
    ];
    constructor() {}
    ngOnInit() {}
}
