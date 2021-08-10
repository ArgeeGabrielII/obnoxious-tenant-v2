import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-progress-colors',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './progress-colors.component.html',
    styleUrls: ['progress-colors.component.scss'],
})
export class ProgressColorsComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    codeSamplesExpanded: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeExpanded,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCode = `
sbpro-progress-bar.mb-3([value]='75', bgColor='bg-primary') .bg-primary
`.trim();

const pugCodeExpanded = `
sbpro-progress-bar.mb-3([value]='75', bgColor='bg-red') .bg-red
`.trim();
