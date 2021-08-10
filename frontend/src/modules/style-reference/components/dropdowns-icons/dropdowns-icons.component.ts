import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-dropdowns-icons',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dropdowns-icons.component.html',
    styleUrls: ['dropdowns-icons.component.scss'],
})
export class DropdownsIconsComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCode = `
a.dropdown-item
    .dropdown-item-icon
        i-feather(name='user')
    | Profile
a.dropdown-item
    .dropdown-item-icon
        i-feather(name='settings')
    | Settings
.dropdown-divider
a.dropdown-item
    .dropdown-item-icon
        i-feather(name='log-out')
    | Logout
`.trim();
