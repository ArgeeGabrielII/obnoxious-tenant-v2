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

    profile_image_path = 'assets/img/illustrations/profiles/profile-2.png';

    constructor(public svcUserAccount: AccountService) {}

    async ngOnInit() {
        await this.svcUserAccount.getMasterList();
        await this.svcUserAccount.getProfile(1);
        console.log(this.svcUserAccount.country_list, this.svcUserAccount.identification_list, this.svcUserAccount.account);
    }

    submit() {
        console.log(this.svcUserAccount.account);
     }
}
