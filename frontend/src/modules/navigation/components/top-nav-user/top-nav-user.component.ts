import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sbpro-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    @Input() placement = 'bottom-end';
    dropdownClasses: string[] = [];
    constructor(private router: Router) {}

    profileData = JSON.parse(localStorage.getItem('locData') || '');

    ngOnInit() {}

    logout(){
        // console.log(`logout`);
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }
}
