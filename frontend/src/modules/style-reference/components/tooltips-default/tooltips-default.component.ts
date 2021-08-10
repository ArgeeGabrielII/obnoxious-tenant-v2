import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-tooltips-default',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tooltips-default.component.html',
    styleUrls: ['tooltips-default.component.scss'],
})
export class TooltipsDefaultComponent implements OnInit {
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
button.btn.btn-primary(
    type='button',
    placement='top',
    ngbTooltip='Tooltip on top'
) Tooltip on top
`.trim();
