import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-lift-sizing',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './lift-sizing.component.html',
    styleUrls: ['lift-sizing.component.scss'],
})
export class LiftSizingComponent implements OnInit {
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
//- Card with lift
sbpro-card.pointer([classes]='["lift", "lift-sm"]')
    .card-body
        | ...

//- Button with lift
a([routerLink]='').btn.btn-primary.lift.lift-sm
    | Button
`.trim();
