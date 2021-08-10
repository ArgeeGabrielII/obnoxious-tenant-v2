import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-forms-solid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forms-solid.component.html',
    styleUrls: ['forms-solid.component.scss'],
})
export class FormsSolidComponent implements OnInit {
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
form
    .mb-3
        label(for='exampleSolidFormControlInput1') Email address
        input#exampleSolidFormControlInput1.form-control.form-control-solid(type='email', placeholder='name@example.com')
    .mb-3
        label(for='exampleSolidFormControlSelect1') Example select
        select#exampleSolidFormControlSelect1.form-control.form-control-solid
            option 1
            option 2
            option 3
            option 4
            option 5
    .mb-3
        label(for='exampleSolidFormControlSelect2') Example multiple select
        select#exampleSolidFormControlSelect2.form-control.form-control-solid(multiple='')
            option 1
            option 2
            option 3
            option 4
            option 5
    .mb-3
        label(for='exampleSolidFormControlTextarea1') Example textarea
        textarea#exampleSolidFormControlTextarea1.form-control.form-control-solid(rows='3')
`.trim();
