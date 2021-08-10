import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-multi-tenant-add-users',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './multi-tenant-add-users.component.html',
    styleUrls: ['multi-tenant-add-users.component.scss'],
})
export class MultiTenantAddUsersComponent implements OnInit {
    @ViewChild('confirmationModal') confirmationModal!: TemplateRef<unknown>;

    addUsersForm = this.fb.group({
        emails: this.fb.array([this.fb.control('', [Validators.required, Validators.email])]),
    });

    constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router) {}
    ngOnInit() {}

    onSubmit() {
        if (this.addUsersForm.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then(
                (result) => {
                    if (result === 'DASHBOARD') {
                        this.router.navigate(['/dashboard']);
                    }
                },
                (reason) => {}
            );
        }

        for (const key in this.addUsersForm.controls) {
            const control = this.addUsersForm.controls[key];
            control.markAllAsTouched();
        }
    }

    addAnother() {
        this.emails.push(this.fb.control('', [Validators.required, Validators.email]));
    }

    /* Accessor Methods */

    get emails() {
        return this.addUsersForm.get('emails') as FormArray;
    }

    emailControlValid(index: number): boolean {
        return this.emails.controls[index].touched && !this.emailControlInvalid(index);
    }
    emailControlInvalid(index: number) {
        return (
            this.emails.controls[index].touched &&
            (this.emails.controls[index].hasError('required') ||
                this.emails.controls[index].hasError('email'))
        );
    }
}
