import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-org-join',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './org-join.component.html',
    styleUrls: ['org-join.component.scss'],
})
export class OrgJoinComponent implements OnInit {
    @ViewChild('confirmationModalAccessCode')
    confirmationModalAccessCode!: TemplateRef<unknown>;
    @ViewChild('confirmationModalRequest')
    confirmationModalRequest!: TemplateRef<unknown>;

    organizationJoinFormCode = this.fb.group({
        code: ['', [Validators.required]],
    });
    organizationJoinFormRequest = this.fb.group({
        name: ['', [Validators.required]],
    });

    constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router) {}
    ngOnInit() {}

    _reset() {
        this.organizationJoinFormCode.reset();
        this.organizationJoinFormRequest.reset();
    }

    onSubmitCode() {
        if (this.organizationJoinFormCode.status === 'VALID') {
            this.modalService.open(this.confirmationModalAccessCode).result.then(
                (result) => {
                    if (result === 'DASHBOARD') {
                        return this.router.navigate(['/dashboard']);
                    }
                    this._reset();
                    return true;
                },
                (reason) => {}
            );
        }
        for (const key in this.organizationJoinFormCode.controls) {
            const control = this.organizationJoinFormCode.controls[key];
            control.markAllAsTouched();
        }
    }

    onSubmitRequest() {
        if (this.organizationJoinFormRequest.status === 'VALID') {
            this.modalService.open(this.confirmationModalRequest).result.then(
                (result) => {
                    if (result === 'DASHBOARD') {
                        return this.router.navigate(['/dashboard']);
                    }
                    this._reset();
                    return true;
                },
                (reason) => {}
            );
        }
        for (const key in this.organizationJoinFormRequest.controls) {
            const control = this.organizationJoinFormRequest.controls[key];
            control.markAllAsTouched();
        }
    }

    /* Accessor Methods */

    get codeControl() {
        return this.organizationJoinFormCode.get('code') as FormControl;
    }

    get codeControlValid() {
        return this.codeControl.touched && !this.codeControlInvalid;
    }

    get codeControlInvalid() {
        return this.codeControl.touched && this.codeControl.hasError('required');
    }

    get nameControl() {
        return this.organizationJoinFormRequest.get('name') as FormControl;
    }

    get nameControlValid() {
        return this.nameControl.touched && !this.nameControlInvalid;
    }

    get nameControlInvalid() {
        return this.nameControl.touched && this.nameControl.hasError('required');
    }
}
