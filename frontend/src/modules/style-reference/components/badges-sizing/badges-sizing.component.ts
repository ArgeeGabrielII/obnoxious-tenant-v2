import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-badges-sizing',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badges-sizing.component.html',
    styleUrls: ['badges-sizing.component.scss'],
})
export class BadgesSizingComponent implements OnInit {
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
h1 Example Heading
    span.badge.bg-primary.ms-2 New

p This is an example paragraph with a badge at the end!
    span.badge.bg-primary.ms-2 New

button.btn.btn-primary.me-2 Messages
    span.badge.bg-white.text-dark.ms-2 5
`.trim();
