import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-alerts-solid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './alerts-solid.component.html',
    styleUrls: ['alerts-solid.component.scss'],
})
export class AlertsSolidComponent implements OnInit {
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
sbpro-alert([icon]='true', classes='alert-primary sb-alert-solid')
    | This is a solid, primary alert!
`.trim();
