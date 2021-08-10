import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-progress-card-guide',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './progress-card.component.html',
    styleUrls: ['progress-card.component.scss'],
})
export class ProgressCardComponent implements OnInit {
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
sbpro-progress-card([value]='25', progressBarColor='bg-danger')
    .card-header.text-danger 25% Progress Card Example
    .card-body This is an example of a card with a 25% completed progress bar.
`.trim();
