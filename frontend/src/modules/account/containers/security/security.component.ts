import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AccountService } from '../../services/account.service';

@Component({
    selector: 'sbpro-security',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './security.component.html',
    styleUrls: ['security.component.scss'],
})
export class SecurityComponent implements OnInit {

    @ViewChild('notificationModal') notificationModal!: TemplateRef<unknown>;

    profileData = JSON.parse(localStorage.getItem('locData') || '');

    securityForm = this.fb.group(
        {
            newPassword: ['', [Validators.required, Validators.minLength(1)]],
            confirmPassword: ['', [Validators.required]],
        },
        { validator: this._checkPasswords }
    );

    constructor(
        public accountService: AccountService, 
        private fb: FormBuilder,
        private router: Router,
        private modalService: NgbModal) {}

    ngOnInit() {
        console.log(`UserID: ${this.profileData.id}`);
    }

    async onSubmit() {
        console.log(this.securityForm.status);
        if (this.securityForm.status === 'VALID') {
            let data: any = await this.accountService.updateSecurityPassword(
                this.securityForm.value.newPassword
            );

            // {msg: 'Update Password Successful'}
            if(data.msg === 'Update Password Successful') {
                this.modalService.open(this.notificationModal).result.then(
                    (result) => {
                        if (result === 'RELOGIN') {
                            localStorage.clear();
                            this.router.navigate(['/auth/login']);
                        } else {
                            this.securityForm.reset();
                        }
                    },
                    (reason) => {}
                );
            }
        }
        for (const key in this.securityForm.controls) {
            const control = this.securityForm.controls[key];
            control.markAllAsTouched();
        }
    }

    _checkPasswords(group: FormGroup) {
        const pass = group.controls.newPassword.value;
        const confirmPass = group.controls.confirmPassword.value;

        return pass === confirmPass ? null : { passwordMismatch: true };
    }

    //#region Accessor Method

    get newPasswordControl() {
        return this.securityForm.get('newPassword') as FormControl;
    }

    get newPasswordControlValid() {
        return this.newPasswordControl.touched && !this.newPasswordControlInvalid;
    }

    get newPasswordControlInvalid() {
        return (
            this.newPasswordControl.touched &&
            (this.newPasswordControl.hasError('required') ||
                this.newPasswordControl.hasError('minlength'))
        );
    }


    get confirmPasswordControl() {
        return this.securityForm.get('confirmPassword') as FormControl;
    }

    get confirmPasswordControlValid() {
        return this.confirmPasswordControl.touched && !this.confirmPasswordControlInvalid;
    }

    get confirmPasswordControlInvalid() {
        return (
            this.confirmPasswordControl.touched &&
            (this.confirmPasswordControl.hasError('required') ||
                this.confirmPasswordControl.hasError('minlength') ||
                this.securityForm.hasError('passwordMismatch'))
        );
    }

    //#endregion
}
