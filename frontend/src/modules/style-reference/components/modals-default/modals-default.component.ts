import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-modals-default',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './modals-default.component.html',
    styleUrls: ['modals-default.component.scss'],
})
export class ModalsDefaultComponent implements OnInit {
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
    codeSamplesStatic: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeStatic,
        },
        {
            language: 'ts',
            code: tsCode,
        },
    ];

    constructor(private modalService: NgbModal) {}
    ngOnInit() {}

    open(content: TemplateRef<unknown>, modalOptions: NgbModalOptions = {}) {
        this.modalService.open(content, modalOptions).result.then(
            (result) => {
                console.log(`Closed with: ${result}`);
            },
            (reason) => {
                console.log(`Dismissed ${this._getDismissReason(reason)}`);
            }
        );
    }

    _getDismissReason(reason: unknown): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}

const pugCode = `
button.btn.btn-primary(
    type='button',
    (click)='open(modalDefault)'
) Launch Demo Modal

ng-template(#modalDefault, let-modal)
    .modal-header
        h5.modal-title Default Bootstrap Modal
        button.btn-close(
            type='button',
            aria-label='Close',
            (click)='modal.dismiss("Cross click")'
        )
            span(aria-hidden='true') ×
    .modal-body.
        This modal window is included with the Bootstrap framework.
        The styling has been changed for the SB Admin Pro theme.
    .modal-footer
        button.btn.btn-secondary(
            type='button',
            (click)='modal.close("Close Click")'
        ) Close
        button.btn.btn-primary(
            type='button',
            (click)='modal.close("Save Click")'
        ) Save changes
`.trim();

const tsCode = `
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({ ... })

export class ModalsExampleComponent implements OnInit {

    constructor(private modalService: NgbModal) {}
    ngOnInit() {}

    open(content: TemplateRef<unknown>, modalOptions: NgbModalOptions = {}) {
        this.modalService.open(content, modalOptions).result.then(
            result => {
                console.log(\`Closed with: \${result}\`);
            },
            reason => {
                console.log(\`Dismissed \${this._getDismissReason(reason)}\`);
            }
        );
    }

    _getDismissReason(reason: unknown): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return \`with: \${reason}\`;
        }
    }
}
`.trim();

const pugCodeStatic = `
button.btn.btn-primary(
    type='button',
    (click)='open(modalDefaultStatic, {backdrop: "static"})'
) Launch Static Backdrop Modal

ng-template(#modalDefaultStatic, let-modal)
    .modal-header
        h5.modal-title Static Backdrop Modal
        button.btn-close(
            type='button',
            aria-label='Close',
            (click)='modal.dismiss("Cross click")'
        )
            span(aria-hidden='true') ×
    .modal-body.
        When using the <code>&#123;backdrop: "static"&#125;</code> NgbModalOptions with a modal window,
        the user cannot dismiss the modal by clicking outside of the modal pane.
    .modal-footer
        button.btn.btn-secondary(
            type='button',
            (click)='modal.close("Close Click")'
        ) Close
        button.btn.btn-primary(
            type='button',
            (click)='modal.close("Save Click")'
        ) Understood
`.trim();
