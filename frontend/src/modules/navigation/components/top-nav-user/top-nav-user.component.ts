import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';

@Component({
    selector: 'sbpro-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    @Input() placement = 'bottom-end';
    dropdownClasses: string[] = [];
    constructor(public userService: UserService) {}
    ngOnInit() {}
}
