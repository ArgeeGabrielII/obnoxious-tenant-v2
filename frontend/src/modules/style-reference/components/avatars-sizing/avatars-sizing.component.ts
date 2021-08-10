import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-avatars-sizing',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './avatars-sizing.component.html',
    styleUrls: ['avatars-sizing.component.scss'],
})
export class AvatarsSizingComponent implements OnInit {
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
sbpro-avatar(imageSrc='path/to/image', classes='avatar-xxl')
sbpro-avatar(imageSrc='path/to/image', classes='avatar-xl')
sbpro-avatar(imageSrc='path/to/image', classes='avatar-lg')
sbpro-avatar(imageSrc='path/to/image')
sbpro-avatar(imageSrc='path/to/image', classes='avatar-sm')
sbpro-avatar(imageSrc='path/to/image', classes='avatar-xs')
`.trim();
