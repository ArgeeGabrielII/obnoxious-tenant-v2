import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AccountService } from '../../services/account.service';

@Component({
    selector: 'profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile.component.html',
    styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {

    @ViewChild('confirmationModal') confirmationModal!: TemplateRef<unknown>;
    @ViewChild('notificationModal') notificationModal!: TemplateRef<unknown>;

    alert = false;
    alert_message = '';

    account: any;
    country_list: any;

    constructor(public svcUserAccount: AccountService, private modalService: NgbModal) {}

    async ngOnInit() {
        await this.svcUserAccount.getMasterList();
        await this.svcUserAccount.getProfile(11);
        
        this.country_list = this.svcUserAccount.country_list;
        this.account = this.svcUserAccount.account;
    }

    submit() {
        
        if(this.account.first_name !== '' && this.account.last_name !== '') {
            this.alert = false;
            this.modalService.open(this.confirmationModal).result.then(
                async (result) => {
                    if(result === "SAVE") {
                        console.log(`Saving the following data: ${JSON.stringify(this.account)}`);
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
