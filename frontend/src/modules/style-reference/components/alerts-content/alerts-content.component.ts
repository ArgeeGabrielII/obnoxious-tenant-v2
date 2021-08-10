import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-alerts-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './alerts-content.component.html',
    styleUrls: ['alerts-content.component.scss'],
})
export class AlertsContentComponent implements OnInit {
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
sbpro-alert(classes='alert-primary', heading='Alert Heading', [dismissable]='true')
    | This alert example has an alert heading, an alert link, and is dismissible!
    a.alert-link(href='javascript:void(0);') Example alert link!
`.trim();
