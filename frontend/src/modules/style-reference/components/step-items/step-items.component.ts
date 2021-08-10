import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-step-items',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './step-items.component.html',
    styleUrls: ['step-items.component.scss'],
})
export class StepItemsComponent implements OnInit {
    steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
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
    [active]='1',
    [steps]='steps.slice(0,2)',
    color='red',
    (stepClicked)='onClicked($event)'
)
sbpro-step(
    [active]='1',
    [steps]='steps.slice(0,3)',
    color='orange',
    (stepClicked)='onClicked($event)'
)
`.trim();

const tsCode = `
// In Component Class:
steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
`.trim();
