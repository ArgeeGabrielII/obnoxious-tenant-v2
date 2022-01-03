import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../../services/user.service';
import { environment } from 'environments/environment';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    @ViewChild('confirmationModal') confirmationModal!: TemplateRef<unknown>;
    @ViewChild('notificationModal') notificationModal!: TemplateRef<unknown>;

    loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });

    constructor(
        private fb: FormBuilder, 
        private modalService: NgbModal, 
        private router: Router, 
        public userService: UserService) {}
    ngOnInit() { localStorage.clear(); }

    async onSubmit() {
        if (this.loginForm.status === 'VALID') {
            if(!environment.production) { console.log(`Login: Username: ${this.loginForm.value.email}, Password: ${this.loginForm.value.password}`); }
            const isValid = await this.userService.getLoginData(this.loginForm.value.email, this.loginForm.value.password);

            if(isValid){
                this.modalService.open(this.confirmationModal).result.then(
                    (result) => {
                        if (result === 'DASHBOARD') {
                            this.router.navigate(['/dashboard']);
                        }
                    },
                    (reason) => {}
                );
            } else {
                this.modalService.open(this.notificationModal);
            }
            
        }

        for (const key in this.loginForm.controls) {
            const control = this.loginForm.controls[key];
            control.markAllAsTouched();
        }
    }

    //#region Accessor Methods
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
    //#endregion
}
