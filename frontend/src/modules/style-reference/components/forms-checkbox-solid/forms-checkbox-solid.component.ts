import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-forms-checkbox-solid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forms-checkbox-solid.component.html',
    styleUrls: ['forms-checkbox-solid.component.scss'],
})
export class FormsCheckboxSolidComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    codeSamplesRadio: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeRadio,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCode = `
.custom-control.custom-checkbox.custom-control-solid
    input#customSolidCheck1.custom-control-input(type='checkbox')
    label.custom-control-label(for='customSolidCheck1') Custom Solid Checkbox 1
`.trim();

const pugCodeRadio = `
.custom-control.custom-radio.custom-control-solid
    input#customSolidRadio1.custom-control-input(type='radio', name='customSolidRadio')
    label.custom-control-label(for='customSolidRadio1') Toggle this custom radio
`.trim();
