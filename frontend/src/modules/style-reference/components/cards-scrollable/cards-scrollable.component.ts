import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-cards-scrollable',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards-scrollable.component.html',
    styleUrls: ['cards-scrollable.component.scss'],
})
export class CardsScrollableComponent implements OnInit {
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
sbpro-card([scrollable]='true')
    .card-header Scrollable Card Example
    .card-body
        sbpro-lorem-ipsum.card-text
        sbpro-lorem-ipsum.card-text
        sbpro-lorem-ipsum.card-text
    .card-footer.small.text-muted Place cursor over card body and scroll!
`.trim();
