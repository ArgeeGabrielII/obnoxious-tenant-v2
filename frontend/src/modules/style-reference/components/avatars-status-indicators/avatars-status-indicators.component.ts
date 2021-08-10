import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-avatars-status-indicators',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './avatars-status-indicators.component.html',
    styleUrls: ['avatars-status-indicators.component.scss'],
})
export class AvatarsStatusIndicatorsComponent implements OnInit {
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
sbpro-avatar(imageSrc='path/to/image', classes='avatar-xxl avatar-offline')
sbpro-avatar(imageSrc='path/to/image', classes='avatar-xl avatar-idle')
sbpro-avatar(imageSrc='path/to/image', classes='avatar-lg avatar-online')
sbpro-avatar(imageSrc='path/to/image', classes='avatar-busy')
`.trim();
