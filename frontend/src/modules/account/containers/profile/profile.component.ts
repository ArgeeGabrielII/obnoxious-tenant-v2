import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './profile.component.html',
    styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    username: string | undefined;
    // first_name: string;
    // middle_name: string;
    // last_name: string;
    // email_address: string;
    // isActive: boolean;
    // date_of_birth: string;
    // nationality: string;
    // phone_number: string;
    // address_1: string;
    // address_2: string;
    // identification_type = ''; // Set Default Value
    // country_name = ''; // Set Default Value

    constructor() {}
    ngOnInit() {}

    submit() {
        console.log(
            this.username
            // , this.first_name
            // , this.middle_name
            // , this.last_name
            // , this.email_address
            // , this.isActive
            // , this.date_of_birth
            // , this.nationality
            // , this.phone_number
            // , this.address_1
            // , this.address_2
            // , this.country_name
            // , this.identification_type
        );
    }
}
