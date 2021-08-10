import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { ToastMessageData, ToastMessageOptions } from '@common/models';
import { ToastService } from '@common/services/toast.service';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-toast-demo',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './toast-demo.component.html',
    styleUrls: ['toast-demo.component.scss'],
})
export class ToastDemoComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
        {
            language: 'ts',
            code: tsCode,
        },
    ];
    codeSamplesManual: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeManual,
        },
        {
            language: 'ts',
            code: tsCode,
        },
    ];
    constructor(private toastService: ToastService) {}
    ngOnInit() {}
    showToast(header: ToastMessageData, body: ToastMessageData, options: ToastMessageOptions = {}) {
        const defaultOptions = {
            autohide: true,
            delay: 5000,
        };
        this.toastService.show(header, body, { ...defaultOptions, ...options });
    }
}

const pugCode = `
button.btn.btn-primary.mb-3(
    (click)='showToast(toastHeader, toastBody)'
) Toast Demo

ng-template(#toastHeader, let-toastService='toastService', let-toastID='toastID')
    i-feather(name='bell').me-2
    strong.me-auto Toast with Autohide
    small.text-muted.ms-2 just now
    button.ms-2.mb-1.close(type='button', aria-label='Close', (click)='toastService.remove(toastID)')
        span(aria-hidden='true') ×

ng-template(#toastBody).
    This is an example toast alert, it will dismiss automatically, or you can dismiss it manually.
`.trim();

const tsCode = `
import { Component, OnInit } from '@angular/core';
import { ToastMessageData, ToastMessageOptions } from '@common/models';
import { ToastService } from '@common/services/toast.service';

@Component({...})
export class ToastDemoComponent implements OnInit {
    constructor(private toastService: ToastService) {}
    ngOnInit() {}
    showToast(header: ToastMessageData, body: ToastMessageData, options: ToastMessageOptions = {}) {
        const defaultOptions = {
            autohide: true,
            delay: 5000,
        };
        this.toastService.show(header, body, { ...defaultOptions, ...options });
    }
}
`.trim();

const pugCodeManual = `
button.btn.btn-primary.mb-3(
    (click)='showToast(toastHeaderManual, "Manual close. This body is a string, not a template", {autohide: false})'
) Toast Demo

ng-template(#toastHeaderManual, let-toastService='toastService', let-toastID='toastID')
    i-feather(name='bell').me-2
    strong.me-auto Toast with Manual Dismissal
    small.text-muted.ms-2 just now
    button.ms-2.mb-1.close(type='button', aria-label='Close', (click)='toastService.remove(toastID)')
        span(aria-hidden='true') ×
`.trim();
