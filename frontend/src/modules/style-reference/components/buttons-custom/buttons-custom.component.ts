import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-buttons-custom',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './buttons-custom.component.html',
    styleUrls: ['buttons-custom.component.scss'],
})
export class ButtonsCustomComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    codeSamplesOutline: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeOutline,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCode = `
button.btn.btn-red(type='button') Red
`.trim();

const pugCodeOutline = `
button.btn.btn-outline-red(type='button') Red
`.trim();
