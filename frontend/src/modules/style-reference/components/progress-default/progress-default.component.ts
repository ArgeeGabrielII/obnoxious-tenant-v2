import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-progress-default',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './progress-default.component.html',
    styleUrls: ['progress-default.component.scss'],
})
export class ProgressDefaultComponent implements OnInit {
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
sbpro-progress-bar.mb-3([value]='25')
`.trim();
