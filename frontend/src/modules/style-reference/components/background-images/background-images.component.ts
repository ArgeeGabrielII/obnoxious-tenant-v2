import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-background-images',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './background-images.component.html',
    styleUrls: ['background-images.component.scss'],
})
export class BackgroundImagesComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    codeSamplesRepeat: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeRepeat,
        },
    ];

    constructor() {}
    ngOnInit() {}
}

const pugCode = `
.bg-img-cover(style='background-image: url("path/to/image")')
    div(style='height: 20rem;')
`.trim();

const pugCodeRepeat = `
.bg-img-repeat.bg-primary(style='background-image: url("path/to/pattern")')
    div(style='height: 20rem;')
`.trim();
