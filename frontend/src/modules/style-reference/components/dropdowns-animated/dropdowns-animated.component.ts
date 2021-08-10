import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-dropdowns-animated',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dropdowns-animated.component.html',
    styleUrls: ['dropdowns-animated.component.scss'],
})
export class DropdownsAnimatedComponent implements OnInit {
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
sbpro-dropdown(
    [classes]='["me-2", "mb-4", "mb-sm-0"]',
    dropdownStyle='text',
    background='btn-primary'
)
    .dropdown-trigger
        | No Animation
    .dropdown-items
        a.dropdown-item Action
        a.dropdown-item Another action
        a.dropdown-item Something else here

sbpro-dropdown(
    [classes]='["me-2", "mb-4", "mb-sm-0"]',
    dropdownStyle='text',
    background='btn-secondary',
    animation='animated--fade-in'
)
    .dropdown-trigger
        | Fade In
    .dropdown-items
        a.dropdown-item Action
        a.dropdown-item Another action
        a.dropdown-item Something else here

sbpro-dropdown(
    dropdownStyle='text',
    background='btn-teal',
    animation='animated--fade-in-up'
)
    .dropdown-trigger
        | Fade In Up
    .dropdown-items
        a.dropdown-item Action
        a.dropdown-item Another action
        a.dropdown-item Something else here
`.trim();
