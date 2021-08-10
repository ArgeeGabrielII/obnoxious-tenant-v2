import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-progress-labels',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './progress-labels.component.html',
    styleUrls: ['progress-labels.component.scss'],
})
export class ProgressLabelsComponent implements OnInit {
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
sbpro-progress-bar.mb-3([value]='25') 25%
`.trim();
