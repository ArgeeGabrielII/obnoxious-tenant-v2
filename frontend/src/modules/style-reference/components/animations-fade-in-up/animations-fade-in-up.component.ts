import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-animations-fade-in-up',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './animations-fade-in-up.component.html',
    styleUrls: ['animations-fade-in-up.component.scss'],
})
export class AnimationsFadeInUpComponent implements OnInit {
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
    dropdownStyle='text',
    background='btn-primary',
    animation='animated--fade-in-up'
)
    .dropdown-trigger
        | Click Me!
    .dropdown-items
        a.dropdown-item Action
        a.dropdown-item Another action
        a.dropdown-item Something else here
`.trim();
