import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../../services/user.service';

@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    @ViewChild('confirmationModal') confirmationModal!: TemplateRef<unknown>;

    registerForm = this.fb.group(
        {
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
            email_address: ['', [Validators.required, Validators.email]],
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(12)]],
            confirmPassword: ['', [Validators.required]],
        },
        { validator: this._checkPasswords }
    );

    constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router, public userService: UserService) {}
    ngOnInit() {}

    async onSubmit() {
        if (this.registerForm.status === 'VALID') {

            let data: any = await this.userService.insertUserProfile(
                this.registerForm.value.first_name,
                this.registerForm.value.last_name,
                this.registerForm.value.email_address,
                this.registerForm.value.username,
                this.registerForm.value.password
            );

            // {msg: 'User Profile Successfully Inserted', id: response.returning[0].id}
            if(data.msg === 'User Profile Successfully Inserted') {
                this.modalService.open(this.confirmationModal).result.then(
                    (result) => {
                        if (result === 'LOGIN') {
                            this.router.navigate(['/auth/login']);
                        }
                    },
                    (reason) => {}
                );
            }
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

    //#region Accessor Methods
    get first_nameControl() {
        return this.registerForm.get('first_name') as FormControl;
    }

    get first_nameControlValid() {
        return this.first_nameControl.touched && !this.first_nameControlInvalid;
    }

    get first_nameControlInvalid() {
        return this.first_nameControl.touched && this.first_nameControl.hasError('required');
    }



    get last_nameControl() {
        return this.registerForm.get('last_name') as FormControl;
    }

    get last_nameControlValid() {
        return this.last_nameControl.touched && !this.last_nameControlInvalid;
    }

    get last_nameControlInvalid() {
        return this.last_nameControl.touched && this.last_nameControl.hasError('required');
    }



    get email_addressControl() {
        return this.registerForm.get('email_address') as FormControl;
    }

    get email_addressControlValid() {
        return this.email_addressControl.touched && !this.email_addressControlInvalid;
    }

    get email_addressControlInvalid() {
        return (
            this.email_addressControl.touched &&
            (this.email_addressControl.hasError('required') || this.email_addressControl.hasError('email'))
        );
    }



    get usernameControl() {
        return this.registerForm.get('username') as FormControl;
    }

    get usernameControlValid() {
        return this.usernameControl.touched && !this.usernameControlInvalid;
    }

    get usernameControlInvalid() {
        return this.usernameControl.touched && this.usernameControl.hasError('required');
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
    //#endregion
}
