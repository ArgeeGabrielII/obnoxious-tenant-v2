import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-cards-collapsable',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards-collapsable.component.html',
    styleUrls: ['cards-collapsable.component.scss'],
})
export class CardsCollapsableComponent implements OnInit {
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
sbpro-card-collapsable(headerText='Collapsable Card Example')
    .card-body
        ...
`.trim();
