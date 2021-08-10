import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-buttons-sizing',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './buttons-sizing.component.html',
    styleUrls: ['buttons-sizing.component.scss'],
})
export class ButtonsSizingComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    codeSamplesIcon: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeIcon,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCode = `
button.btn.btn-primary.btn-xs Extra Small
`.trim();

const pugCodeIcon = `
button.btn.btn-primary.btn-xs.btn-icon
    fa-icon([icon]='["fas", "flag"]')
`.trim();
