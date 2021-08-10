import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-dropdowns-default',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dropdowns-default.component.html',
    styleUrls: ['dropdowns-default.component.scss'],
})
export class DropdownsDefaultComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    constructor() {}
    ngOnInit() {}
    action() {
        console.log('action');
    }
    anotherAction() {
        console.log('anotherAction');
    }
}

const pugCode = `
sbpro-dropdown(
    dropdownStyle='text',
    background='btn-primary'
)
    .dropdown-trigger
        | Dropdown Button
    .dropdown-items
        a.dropdown-item(routerLink='/dashboard') Dashboard
        a.dropdown-item((click)='action()') Action
        a.dropdown-item((click)='anotherAction()') Another Action
`.trim();
