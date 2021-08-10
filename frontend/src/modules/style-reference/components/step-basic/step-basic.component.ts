import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-step-basic',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './step-basic.component.html',
    styleUrls: ['step-basic.component.scss'],
})
export class StepBasicComponent implements OnInit {
    steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
        {
            language: 'ts',
            code: tsCode,
        },
    ];
    constructor() {}
    ngOnInit() {}
    onClicked(clickedItem: number) {
        alert(`Clicked on ${this.steps[clickedItem]}`);
    }
}

const pugCode = `
sbpro-step(
    [active]='2',
    [steps]='steps',
    (stepClicked)='onClicked($event)'
)
`.trim();

const tsCode = `
// In Component Class:
steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
`.trim();
