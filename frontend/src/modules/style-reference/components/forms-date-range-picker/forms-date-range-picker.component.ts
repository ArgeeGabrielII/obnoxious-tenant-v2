import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-forms-date-range-picker',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forms-date-range-picker.component.html',
    styleUrls: ['forms-date-range-picker.component.scss'],
})
export class FormsDateRangePickerComponent implements OnInit {
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
sbpro-date-range-quick(placement='bottom-start')
`.trim();
