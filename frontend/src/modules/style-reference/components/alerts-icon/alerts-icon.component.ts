import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-alerts-icon',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './alerts-icon.component.html',
    styleUrls: ['alerts-icon.component.scss'],
})
export class AlertsIconComponent implements OnInit {
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
sbpro-alert([icon]='true', classes='alert-primary', heading='Primary Icon Alert')
    .alert-icon-aside
        fa-icon([icon]='["far", "flag"]')
    | This alert uses an icon from Font Awesome!

sbpro-alert([icon]='true', classes='alert-secondary', heading='Secondary Icon Alert')
    .alert-icon-aside
        i-feather(name='feather')
    | This alert uses an icon from Feather Icons!
`.trim();
