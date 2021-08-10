import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-modals-sizing',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './modals-sizing.component.html',
    styleUrls: ['modals-sizing.component.scss'],
})
export class ModalsSizingComponent implements OnInit {
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
button.btn.btn-primary.me-1(
    type='button',
    (click)='open(modalSizing, {size: "xl"})'
) Extra Large

ng-template(#modalSizing, let-modal)
    .modal-header
        h5.modal-title Extra Large Modal
        button.btn-close(type='button', data-dismiss='modal', aria-label='Close')
            span(aria-hidden='true') ×
    .modal-body
        p This is an example of an extra large modal!
    .modal-footer
        button.btn.btn-secondary(
            type='button',
            (click)='modal.close("Close Click")'
        ) Close
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
