import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-cards-images',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards-images.component.html',
    styleUrls: ['cards-images.component.scss'],
})
export class CardsImagesComponent implements OnInit {
    codeSamplesCaps: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeCaps,
        },
    ];
    codeSamplesOverlay: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeOverlay,
        },
    ];
    codeSamplesSides: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeSides,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCodeCaps = `
sbpro-card-image(
    src='url/to/image',
    alt='...',
    placement='top'
)
    .card-body
        h5.card-title Card Image Cap (Top)
        p.card-text ...

sbpro-card-image(
    src='url/to/image',
    alt='...',
    placement='bottom'
)
    .card-body
        h5.card-title Card Image Cap (Bottom)
        p.card-text ...
`.trim();

const pugCodeOverlay = `
sbpro-card-image(
    src='url/to/image',
    alt='...',
    placement='overlay',
    background='bg-light',
    color='text-dark'
)
    .card-img-overlay
        h5.card-title Card Image (Overlay)
        p.card-text ...
`.trim();

const pugCodeSides = `
sbpro-card-image(
    src='url/to/image',
    alt='...',
    placement='left'
)
    .card-body
        h5.card-title Card Image (Left)
        p.card-text ...

sbpro-card-image(
    src='url/to/image',
    alt='...',
    placement='right'
)
    .card-body
        h5.card-title Card Image (Right)
        p.card-text ...
`.trim();
