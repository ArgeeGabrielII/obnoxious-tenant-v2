import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-progress-striped',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './progress-striped.component.html',
    styleUrls: ['progress-striped.component.scss'],
})
export class ProgressStripedComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    codeSamplesAnimated: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeAnimated,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCode = `
sbpro-progress-bar.mb-3([value]='25', [striped]='true', bgColor='bg-success')
`.trim();

const pugCodeAnimated = `
sbpro-progress-bar.mb-3([value]='25', [striped]='true', [animated]='true', bgColor='bg-success')
`.trim();
