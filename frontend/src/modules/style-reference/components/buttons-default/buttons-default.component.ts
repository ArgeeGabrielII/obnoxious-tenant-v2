import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-buttons-default',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './buttons-default.component.html',
    styleUrls: ['buttons-default.component.scss'],
})
export class ButtonsDefaultComponent implements OnInit {
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
button.btn.btn-primary(type='button') Primary
`.trim();

const pugCodeOutline = `
button.btn.btn-outline-primary(type='button') Primary
`.trim();
