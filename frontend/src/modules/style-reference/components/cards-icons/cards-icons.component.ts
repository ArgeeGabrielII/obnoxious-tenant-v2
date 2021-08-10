import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-cards-icons',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards-icons.component.html',
    styleUrls: ['cards-icons.component.scss'],
})
export class CardsIconsComponent implements OnInit {
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
sbpro-card-icon
    .card-icon
        i-feather.text-white-50(name='layers')
    .card-body
        h5.card-title Custom Icon Card
        p.card-text ...
`.trim();
