import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-forms-checkbox-custom',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forms-checkbox-custom.component.html',
    styleUrls: ['forms-checkbox-custom.component.scss'],
})
export class FormsCheckboxCustomComponent implements OnInit {
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
.custom-control.custom-checkbox
    input#customCheck1.custom-control-input(type='checkbox')
    label.custom-control-label(for='customCheck1') Custom Checkbox 1
`.trim();

const pugCodeRadio = `
.custom-control.custom-radio
    input#customRadio1.custom-control-input(type='radio', name='customRadio')
    label.custom-control-label(for='customRadio1') Toggle this custom radio
`.trim();
