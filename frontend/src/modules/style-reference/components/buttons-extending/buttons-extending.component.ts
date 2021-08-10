import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-buttons-extending',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './buttons-extending.component.html',
    styleUrls: ['buttons-extending.component.scss'],
})
export class ButtonsExtendingComponent implements OnInit {
    codeSamplesSquare: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeSquare,
        },
    ];
    codeSamplesShadowed: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeShadowed,
        },
    ];
    codeSamplesPill: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodePill,
        },
    ];
    codeSamplesDeeper: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeDeeper,
        },
    ];
    codeSamplesDeeperSquare: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeDeeperSquare,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCodeSquare = `
button.btn.btn-primary.rounded-0 Primary
`.trim();

const pugCodeShadowed = `
button.btn.btn-primary.shadow-sm Primary
`.trim();

const pugCodePill = `
button.btn.btn-primary.rounded-pill Primary
`.trim();

const pugCodeDeeper = `
button.btn.btn-primary.rounded-pill.px-4 Primary
`.trim();

const pugCodeDeeperSquare = `
button.btn.btn-primary.rounded-0.shadow-sm.px-4.py-3.text-uppercase.fw-800 Primary
`.trim();
