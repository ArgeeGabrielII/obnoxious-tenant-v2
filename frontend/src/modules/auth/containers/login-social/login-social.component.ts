import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-login-social',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login-social.component.html',
    styleUrls: ['login-social.component.scss'],
})
export class LoginSocialComponent implements OnInit {
    @ViewChild('confirmationModal') confirmationModal!: TemplateRef<unknown>;

    loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        checkbox: [false],
    });

    constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router) {}
    ngOnInit() {}

    onSubmit() {
        if (this.loginForm.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then(
                (result) => {
                    if (result === 'DASHBOARD') {
                        this.router.navigate(['/dashboard']);
                    }
                },
                (reason) => {}
            );
        }

        for (const key in this.loginForm.controls) {
            const control = this.loginForm.controls[key];
            control.markAllAsTouched();
        }
    }

    /* Accessor Methods */

    get emailControl() {
        return this.loginForm.get('email') as FormControl;
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

    get passwordControl() {
        return this.loginForm.get('password') as FormControl;
    }

    get passwordControlValid() {
        return this.passwordControl.touched && !this.passwordControlInvalid;
    }

    get passwordControlInvalid() {
        return (
            this.passwordControl.touched &&
            (this.passwordControl.hasError('required') ||
                this.passwordControl.hasError('minlength'))
        );
    }
}
