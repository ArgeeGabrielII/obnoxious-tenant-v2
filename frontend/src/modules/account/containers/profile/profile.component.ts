import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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

    // test
    alert = false;
    alert_message = '';

    profile_picture: any;
    account: any;
    country_list: any;

    profileData = JSON.parse(localStorage.getItem('_ld') || '');

    constructor(
        public svcUserAccount: AccountService, 
        private modalService: NgbModal) { }

    async ngOnInit() {
        await this.svcUserAccount.getMasterList();
        await this.svcUserAccount.getProfile(parseInt(this.profileData.id));
        
        this.country_list = this.svcUserAccount.country_list;
        this.account = this.svcUserAccount.account;

        if(!environment.production) {
            console.log(`Account > Profile > Country List: ${JSON.stringify(this.country_list)}`);
            console.log(`Account > Profile > Account Details: ${JSON.stringify(this.account)}`);
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

    submit() {
        if(this.account.first_name !== '' && this.account.last_name !== '') {
            this.alert = false;
            this.modalService.open(this.confirmationModal).result.then(
                async (result) => {
                    if(result === "SAVE") {
                        this.svcUserAccount.updateProfile(this.account);
                        this.modalService.open(this.notificationModal);
                    }
                },
                (reason) => { }
            );
        } else {
            this.alert = true;
            this.alert_message = 'Please fill in the details for the required fields.';
        }
     }
}
