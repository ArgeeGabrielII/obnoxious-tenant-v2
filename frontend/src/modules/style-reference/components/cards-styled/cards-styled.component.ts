import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-cards-styled',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards-styled.component.html',
    styleUrls: ['cards-styled.component.scss'],
})
export class CardsStyledComponent implements OnInit {
    codeSamplesWaves: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeWaves,
        },
    ];

    codeSamplesAngles: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeAngles,
        },
    ];

    constructor() {}
    ngOnInit() {}
}

const pugCodeWaves = `
sbpro-card(styled='waves')
    .card-header Waves Styled Card
    .card-body
        .py-10
            | This is an example of a card with the waves styling ...
`.trim();

const pugCodeAngles = `
sbpro-card(styled='angles')
.card-header Angles Styled Card
.card-body
    .py-10
        | This is an example of a card with the angles styling ...
`.trim();
