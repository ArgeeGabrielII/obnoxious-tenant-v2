import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-alerts-extended',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './alerts-extended.component.html',
    styleUrls: ['alerts-extended.component.scss'],
})
export class AlertsExtendedComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];

    codeSamplesSolid: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeSolid,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCode = `
sbpro-alert(classes='alert-red', [dismissable]='false')
    | This is a red alert.
`.trim();

const pugCodeSolid = `
sbpro-alert(classes='alert-red sb-alert-solid', [dismissable]='false')
    | This is a red alert.
`.trim();
