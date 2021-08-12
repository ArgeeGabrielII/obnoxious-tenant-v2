import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AccountService } from '../../services/account.service';

@Component({
    selector: 'sbpro-profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile.component.html',
    styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    alert = false;
    alert_message = '';

    username = '';
    first_name = '';
    last_name = '';
    email_address = '';
    date_of_birth = '';
    nationality = '';
    contact_number = '';
    address_1 = '';
    address_2 = '';
    country_name = ''; // Set Default Value

    constructor(public svcUserAccount: AccountService) {}

    async ngOnInit() {
        await this.svcUserAccount.getMasterList();
        console.log(this.svcUserAccount.country_list, this.svcUserAccount.identification_list);
    }

    submit() {
        if(this.country_name !== '') {
            this.alert = false;
            this.alert_message = '';

            console.log(
                this.username,
                this.first_name,
                this.last_name,
                this.email_address,
                this.date_of_birth,
                this.nationality,
                this.contact_number,
                this.address_1,
                this.address_2,
                this.country_name
            );
        } else {
            this.alert = true;
            this.alert_message = 'Please select a country.';
        }

        
    }
}
