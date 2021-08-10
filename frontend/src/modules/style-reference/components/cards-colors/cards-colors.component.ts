import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-cards-colors',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards-colors.component.html',
    styleUrls: ['cards-colors.component.scss'],
})
export class CardsColorsComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];

    codeSamplesExtended: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeExtended,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCode = `
sbpro-card.mb-4(background='bg-primary', color='text-white')
    .card-header.text-white Primary Card
    .card-body
        ...
    .card-footer Card Footer

sbpro-card.mb-4(background='bg-light')
    .card-header.text-dark Light Card
    .card-body ...
    .card-footer Card Footer
`.trim();

const pugCodeExtended = `
sbpro-card.mb-4(background='bg-red', color='text-white')
    .card-header.text-white Red Card
    .card-body
        ...
    .card-footer Card Footer
`.trim();
