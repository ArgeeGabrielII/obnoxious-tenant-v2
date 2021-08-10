import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-cards-basic',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards-basic.component.html',
    styleUrls: ['cards-basic.component.scss'],
})
export class CardsBasicComponent implements OnInit {
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
sbpro-card
    .card-header Basic Card Example
    .card-body This is an example of a basic card.
`.trim();
