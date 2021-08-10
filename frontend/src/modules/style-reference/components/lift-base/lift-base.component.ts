import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-lift-base',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './lift-base.component.html',
    styleUrls: ['lift-base.component.scss'],
})
export class LiftBaseComponent implements OnInit {
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
sbpro-card.pointer([classes]='["lift"]')
    .card-body
        | ...

//- Button with lift
a([routerLink]='').btn.btn-primary.lift
    | Button
`.trim();
