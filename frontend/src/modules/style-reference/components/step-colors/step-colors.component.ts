import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-step-colors',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './step-colors.component.html',
    styleUrls: ['step-colors.component.scss'],
})
export class StepColorsComponent implements OnInit {
    steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
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
    color='primary',
    (stepClicked)='onClicked($event)'
)
`.trim();
