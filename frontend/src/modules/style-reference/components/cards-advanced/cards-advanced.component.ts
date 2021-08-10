import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-cards-advanced',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards-advanced.component.html',
    styleUrls: ['cards-advanced.component.scss'],
})
export class CardsAdvancedComponent implements OnInit {
    codeSamplesDropdown: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeDropdown,
        },
    ];
    codeSamplesIcons: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeIcons,
        },
    ];
    codeSamplesButton: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeButton,
        },
    ];
    codeSamplesInput: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeInput,
        },
    ];

    constructor() {}
    ngOnInit() {}

    action() {
        alert('Action');
    }

    anotherAction() {
        alert('Anbother Action');
    }
}

const pugCodeDropdown = `
sbpro-card([headerActions]='true')
    .card-header
        | Header Dropdown
        sbpro-dropdown(
            placement='bottom-end',
            animation='animated--fade-in-up',
            [classes]='["no-caret"]'
        )
            .dropdown-trigger
                i-feather.text-primary(name='more-vertical')
            .dropdown-items
                a.dropdown-item(routerLink='/dashboard') Dashboard
                a.dropdown-item((click)='action()') Action
                a.dropdown-item((click)='anotherAction()') Another Action
    .card-body
        ...
`.trim();

const pugCodeIcons = `
sbpro-card([headerActions]='true')
    .card-header
        | Header Icons
        div
            button.btn.btn-pink.btn-icon.me-2
                i-feather(name='heart')
            button.btn.btn-teal.btn-icon.me-2
                i-feather(name='bookmark')
            button.btn.btn-blue.btn-icon
                i-feather(name='share')
    .card-body
        ...
`.trim();

const pugCodeButton = `
sbpro-card([headerActions]='true')
    .card-header
        | Header Button
        button.btn.btn-primary.btn-sm Action
    .card-body
        ...
`.trim();

const pugCodeInput = `
sbpro-card([headerActions]='true')
    .card-header
        | Header Input
        .form
            input.form-control(placeholder='Search')

    .card-body
        ...
`.trim();
