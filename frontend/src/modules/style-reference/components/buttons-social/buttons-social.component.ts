import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-buttons-social',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './buttons-social.component.html',
    styleUrls: ['buttons-social.component.scss'],
})
export class ButtonsSocialComponent implements OnInit {
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
button.my-1.me-2.btn.btn-facebook
    fa-icon.me-2([icon]='["fab", "facebook"]')
    | Facebook
`.trim();
