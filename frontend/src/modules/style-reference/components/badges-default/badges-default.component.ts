import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-badges-default',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badges-default.component.html',
    styleUrls: ['badges-default.component.scss'],
})
export class BadgesDefaultComponent implements OnInit {
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
span.badge.bg-primary.me-2 Primary
`.trim();
