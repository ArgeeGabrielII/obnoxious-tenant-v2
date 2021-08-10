import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-toast-colors',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './toast-colors.component.html',
    styleUrls: ['toast-colors.component.scss'],
})
export class ToastColorsComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    codeSamplesBackground: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeBackground,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCode = `
sbpro-toast(
    [header]='toastTextPrimary',
    body='This toast uses the primary text utility on the toast header.',
    headerClasses='text-primary'
)

ng-template(#toastTextPrimary)
    i(data-feather='alert-circle').me-2
    strong.me-auto Primary Text Toast
    small.text-muted.ms-2 just now
    button.ms-2.mb-1.close(type='button', data-dismiss='toast', aria-label='Close')
        span(aria-hidden='true') ×
`.trim();

const pugCodeBackground = `
sbpro-toast(
    [header]='toastTextPrimaryWhite',
    body='This toast uses the primary text utility on the toast header.',
    headerClasses='bg-primary text-white'
)

ng-template(#toastTextPrimaryWhite)
    i(data-feather='alert-circle').me-2.text-white-50
    strong.me-auto Primary Background Toast
    small.text-muted.ms-2.text-white-50 just now
    button.ms-2.mb-1.close.text-white(type='button', data-dismiss='toast', aria-label='Close')
        span(aria-hidden='true') ×
`.trim();
