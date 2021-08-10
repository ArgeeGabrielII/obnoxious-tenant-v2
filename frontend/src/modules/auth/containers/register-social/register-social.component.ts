import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-register-social',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register-social.component.html',
    styleUrls: ['register-social.component.scss'],
})
export class RegisterSocialComponent implements OnInit {
    @ViewChild('confirmationModal') confirmationModal!: TemplateRef<unknown>;

    registerForm = this.fb.group(
        {
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required]],
            termsAndConditions: [false, [Validators.requiredTrue]],
        },
        { validator: this._checkPasswords }
    );

    constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router) {}
    ngOnInit() {}

    onSubmit() {
        if (this.registerForm.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then(
                (result) => {
                    if (result === 'DASHBOARD') {
                        this.router.navigate(['/dashboard']);
                    }
                },
                (reason) => {}
            );
        }
        for (const key in this.registerForm.controls) {
            const control = this.registerForm.controls[key];
            control.markAllAsTouched();
        }
    }

    _checkPasswords(group: FormGroup) {
        const pass = group.controls.password.value;
        const confirmPass = group.controls.confirmPassword.value;

        return pass === confirmPass ? null : { passwordMismatch: true };
    }

    /* Accessor Methods */

    get firstNameControl() {
        return this.registerForm.get('firstName') as FormControl;
    }

    get firstNameControlValid() {
        return this.firstNameControl.touched && !this.firstNameControlInvalid;
    }

    get firstNameControlInvalid() {
        return this.firstNameControl.touched && this.firstNameControl.hasError('required');
    }

    get lastNameControl() {
        return this.registerForm.get('lastName') as FormControl;
    }

    get lastNameControlValid() {
        return this.lastNameControl.touched && !this.lastNameControlInvalid;
    }

    get lastNameControlInvalid() {
        return this.lastNameControl.touched && this.lastNameControl.hasError('required');
    }

    get emailControl() {
        return this.registerForm.get('email') as FormControl;
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
        return this.registerForm.get('password') as FormControl;
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

    get confirmPasswordControl() {
        return this.registerForm.get('confirmPassword') as FormControl;
    }

    get confirmPasswordControlValid() {
        return this.confirmPasswordControl.touched && !this.confirmPasswordControlInvalid;
    }

    get confirmPasswordControlInvalid() {
        return (
            this.confirmPasswordControl.touched &&
            (this.confirmPasswordControl.hasError('required') ||
                this.confirmPasswordControl.hasError('minlength') ||
                this.registerForm.hasError('passwordMismatch'))
        );
    }

    get termsAndConditionsControl() {
        return this.registerForm.get('termsAndConditions') as FormControl;
    }

    get termsAndConditionsControlValid() {
        return this.termsAndConditionsControl.touched && !this.termsAndConditionsControlInvalid;
    }

    get termsAndConditionsControlInvalid() {
        return (
            this.termsAndConditionsControl.touched &&
            this.termsAndConditionsControl.hasError('required')
        );
    }
}
