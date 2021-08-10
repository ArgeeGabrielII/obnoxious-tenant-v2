import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-forgot-password-social',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './forgot-password-social.component.html',
    styleUrls: ['forgot-password-social.component.scss'],
})
export class ForgotPasswordSocialComponent implements OnInit {
    @ViewChild('confirmationModal') confirmationModal!: TemplateRef<unknown>;

    forgotPasswordForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
    });

    constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router) {}
    ngOnInit() {}

    onSubmit() {
        if (this.forgotPasswordForm.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then(
                (result) => {
                    if (result === 'DASHBOARD') {
                        this.router.navigate(['/dashboard']);
                    }
                },
                (reason) => {}
            );
        }

        for (const key in this.forgotPasswordForm.controls) {
            const control = this.forgotPasswordForm.controls[key];
            control.markAllAsTouched();
        }
    }

    /* Accessor Methods */

    get emailControl() {
        return this.forgotPasswordForm.get('email') as FormControl;
    }

    get emailControlValid() {
        return this.emailControl.touched && !this.emailControlInvalid;
    }

    get emailControlInvalid() {
        return (
            this.emailControl.touched &&
            (this.emailControl.hasError('required') || this.emailControl.hasError('email'))
        );
    }
}
