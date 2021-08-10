import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-tooltips-popovers',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tooltips-popovers.component.html',
    styleUrls: ['tooltips-popovers.component.scss'],
})
export class TooltipsPopoversComponent implements OnInit {
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
    placement='top',
    ngbPopover='This popover is on the top!',
    popoverTitle='Popover Title'
) Popover on top
`.trim();
