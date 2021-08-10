import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-modals-scrollable',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './modals-scrollable.component.html',
    styleUrls: ['modals-scrollable.component.scss'],
})
export class ModalsScrollableComponent implements OnInit {
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
    codeSamplesModalScroll: CodeSample[] = [
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
    (click)='open(modalScrollable)'
) Launch Scrollable Modal

ng-template(#modalScrollable, let-modal)
    .modal-header
        h5.modal-title Long Modal with Page Scrolling
        button.btn-close(
            type='button',
            aria-label='Close',
            (click)='modal.dismiss("Cross click")'
        )
            span(aria-hidden='true') ×
    .modal-body
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum.mb-0
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
    (click)='open(modalScrollable, {scrollable: true})'
) Launch Scrollable Modal

ng-template(#modalScrollable, let-modal)
    .modal-header
        h5.modal-title Long Modal with Page Scrolling
        button.btn-close(
            type='button',
            aria-label='Close',
            (click)='modal.dismiss("Cross click")'
        )
            span(aria-hidden='true') ×
    .modal-body
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum
        sbpro-lorem-ipsum.mb-0
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
