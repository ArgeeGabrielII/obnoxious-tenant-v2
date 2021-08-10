import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-buttons-icon',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './buttons-icon.component.html',
    styleUrls: ['buttons-icon.component.scss'],
})
export class ButtonsIconComponent implements OnInit {
    codeSamplesFeather: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeFeather,
        },
    ];
    codeSamplesFontAwesome: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeFontAwesome,
        },
    ];
    codeSamplesText: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeText,
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

const pugCodeFeather = `
button.btn.btn-red.btn-icon(type='button')
    i-feather(name='feather')
`.trim();

const pugCodeFontAwesome = `
button.btn.btn-red.btn-icon(type='button')
    fa-icon([icon]='["fas", "flag"]')
`.trim();

const pugCodeText = `
button.btn.btn-red.btn-icon(type='button') S
`.trim();

const pugCodeOutline = `
button.btn.btn-outline-red.btn-icon(type='button')
    i-feather(name='zap')
`.trim();
