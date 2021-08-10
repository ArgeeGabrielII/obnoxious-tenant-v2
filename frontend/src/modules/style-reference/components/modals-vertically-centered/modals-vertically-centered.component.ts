import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-modals-vertically-centered',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './modals-vertically-centered.component.html',
    styleUrls: ['modals-vertically-centered.component.scss'],
})
export class ModalsVerticallyCenteredComponent implements OnInit {
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
button.btn.btn-primary(
    type='button',
    (click)='open(modalVerticallyVentered, {centered: true})'
) Launch Vertically Centered Modal

ng-template(#modalVerticallyVentered, let-modal)
    .modal-header
        h5.modal-title Vertically Centered Modal
        button.btn-close(
            type='button',
            aria-label='Close',
            (click)='modal.dismiss("Cross click")'
        )
            span(aria-hidden='true') ×
    .modal-body
        | The vertically centered modal centers the modal dialog in the center of the page.
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
