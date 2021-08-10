import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-forms-input-groups',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forms-input-groups.component.html',
    styleUrls: ['forms-input-groups.component.scss'],
})
export class FormsInputGroupsComponent implements OnInit {
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
.input-group.input-group-joined.mb-4
    input.form-control(type='text', placeholder='Input group append...', aria-label='Search')
    .input-group-text
        i-feather(name='search')

.input-group.input-group-joined.mb-4
    .input-group-text
        i-feather(name='search')
    input.form-control(type='text', placeholder='Input group prepend...', aria-label='Search')

.input-group.input-group-joined.input-group-solid.mb-4
    input.form-control(type='text', placeholder='Input group append...', aria-label='Search')
    .input-group-text
        i-feather(name='search')

.input-group.input-group-joined.input-group-solid
    .input-group-text
        i-feather(name='search')
    input.form-control(type='text', placeholder='Input group prepend...', aria-label='Search')
`.trim();
