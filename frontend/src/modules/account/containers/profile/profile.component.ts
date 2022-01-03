import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AccountService } from '../../services/account.service';
import { environment } from 'environments/environment';

@Component({
    selector: 'profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile.component.html',
    styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {

    @ViewChild('confirmationModal') confirmationModal!: TemplateRef<unknown>;
    @ViewChild('notificationModal') notificationModal!: TemplateRef<unknown>;

    accountDetails = this.fb.group({
        id: [''],
        tier_list: this.fb.group({
            tier: [{value: '', disabled: true}],
            description: [''],
            image_path: ['']
        }),
        role_list: this.fb.group({
            roles: ['']
        }),
        username: [{value: '', disabled: true}],
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        email_address: [{value: '', disabled: true}],
        date_of_birth: ['', [Validators.required]],
        contact_number: [0, [Validators.required]],
        gender: ['', [Validators.required]],
        address_1: ['', [Validators.required]],
        address_2: [''],
        country_code: [''],
        nationality: [''],
    });

    profile_picture: any;
    account: any;
    country_list: any;

    profileData = JSON.parse(localStorage.getItem('_ld') || '');

    constructor(
        private fb: FormBuilder, 
        public svcUserAccount: AccountService, 
        private modalService: NgbModal) { }

    async ngOnInit() {
        await this.svcUserAccount.getMasterList();
        await this.svcUserAccount.getProfile(parseInt(this.profileData.id));
        
        this.country_list = this.svcUserAccount.country_list;
        console.log(this.svcUserAccount.account);

        this.accountDetails.patchValue(this.svcUserAccount.account);

        if(!environment.production) {
            console.log(`Account > Profile > Country List: ${JSON.stringify(this.country_list)}`);
            // console.log(`Account > Profile > Account Details: ${JSON.stringify(this.account)}`);
        }
    }

    onFileSelect(event: any) {
        if(event.target.files.length > 0) {
            this.profile_picture = event.target.files[0];
        }
    }

    async imageSubmit() {
        const fd = new FormData();
        
        fd.append('user_id', this.profileData.id);
        fd.append('file_type', 'profile-picture');
        fd.append('filename', this.profile_picture);

        await this.svcUserAccount.updateProfilePicture(fd, this.profileData.id);
    }

    async onSubmit() {
        console.log(this.accountDetails.getRawValue());
        if (this.accountDetails.status === 'VALID') {
            this.modalService.open(this.confirmationModal).result.then(
                async (result) => {
                    if(result === "SAVE") {
                        // console.log(this.accountDetails.getRawValue());
                        this.svcUserAccount.updateProfile(this.accountDetails.getRawValue());
                        this.modalService.open(this.notificationModal);
                    }
                },
                (reason) => {}
            );

            for (const key in this.accountDetails.controls) {
                const control = this.accountDetails.controls[key];
                control.markAllAsTouched();
            }
        }
    }


    //#region Accessor Methods

    get firstnameControl() {
        return this.accountDetails.get('first_name') as FormControl;
    }

    get firstnameControlValid() {
        return this.firstnameControl.touched && !this.firstnameControlInvalid;
    }

    get firstnameControlInvalid() {
        return (
            this.firstnameControl.touched &&
            (this.firstnameControl.hasError('required') || this.firstnameControl.hasError('first_name'))
        );
    }


    get lastnameControl() {
        return this.accountDetails.get('last_name') as FormControl;
    }

    get lastnameControlValid() {
        return this.lastnameControl.touched && !this.lastnameControlInvalid;
    }

    get lastnameControlInvalid() {
        return (
            this.lastnameControl.touched &&
            (this.lastnameControl.hasError('required') || this.lastnameControl.hasError('last_name'))
        );
    }


    get dateofbirthControl() {
        return this.accountDetails.get('date_of_birth') as FormControl;
    }

    get dateofbirthControlValid() {
        return this.dateofbirthControl.touched && !this.dateofbirthControlInvalid;
    }

    get dateofbirthControlInvalid() {
        return (
            this.dateofbirthControl.touched &&
            (this.dateofbirthControl.hasError('required') || this.dateofbirthControl.hasError('date_of_birth'))
        );
    }


    get contactnumberControl() {
        return this.accountDetails.get('contact_number') as FormControl;
    }

    get contactnumberControlValid() {
        return this.contactnumberControl.touched && !this.contactnumberControlInvalid;
    }

    get contactnumberControlInvalid() {
        return (
            this.contactnumberControl.touched &&
            (this.contactnumberControl.hasError('required') || this.contactnumberControl.hasError('contact_number'))
        );
    }


    get genderControl() {
        return this.accountDetails.get('gender') as FormControl;
    }

    get genderControlValid() {
        return this.genderControl.touched && !this.genderControlInvalid;
    }

    get genderControlInvalid() {
        return (
            this.genderControl.touched &&
            (this.genderControl.hasError('required') || this.genderControl.hasError('gender'))
        );
    }


    get address1Control() {
        return this.accountDetails.get('address_1') as FormControl;
    }

    get address1ControlValid() {
        return this.address1Control.touched && !this.address1ControlInvalid;
    }

    get address1ControlInvalid() {
        return (
            this.address1Control.touched &&
            (this.address1Control.hasError('required') || this.address1Control.hasError('address_1'))
        );
    }


    get countrynameControl() {
        return this.accountDetails.get('country_code') as FormControl;
    }

    get country_codeControlValid() {
        return this.countrynameControl.touched && !this.countrynameControlInvalid;
    }

    get countrynameControlInvalid() {
        return (
            this.countrynameControl.touched &&
            (this.countrynameControl.hasError('required') || this.countrynameControl.hasError('country_code'))
        );
    }


    get nationalityControl() {
        return this.accountDetails.get('nationality') as FormControl;
    }

    get nationalityControlValid() {
        return this.nationalityControl.touched && !this.nationalityControlInvalid;
    }

    get nationalityControlInvalid() {
        return (
            this.nationalityControl.touched &&
            (this.nationalityControl.hasError('required') || this.nationalityControl.hasError('nationality'))
        );
    }

    //#endregion
}
