import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { UtilityService } from '@common/services';
import { sideNavItems, sideNavSections } from '@modules/navigation/data/side-nav-dashboard.data';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sbpro-layout-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-dashboard.component.html',
    styleUrls: ['layout-dashboard.component.scss'],
})
export class LayoutDashboardComponent implements OnInit, OnDestroy {
    @Input() static = false;
    @Input() light = false;
    @Input() rtl = false;
    @HostBinding('class.sidenav-toggled') sideNavHidden = false;
    subscription: Subscription = new Subscription();
    sideNavItems = sideNavItems;
    sideNavSections = sideNavSections;
    sidenavStyle = 'sidenav-dark';

    constructor(
        public utilityService: UtilityService,
        public navigationService: NavigationService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}
    ngOnInit() {
        if (this.light) {
            this.sidenavStyle = 'sidenav-light';
        }
        this.subscription.add(
            this.navigationService.sideNavVisible$().subscribe((isVisible) => {
                this.sideNavHidden = !isVisible;
                this.changeDetectorRef.markForCheck();
            })
        );
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    closeSideNavIfOpen() {
        const BOOTSTRAP_LG_WIDTH = 992;
        if (this.utilityService.window.innerWidth >= 992) {
            return;
        }
        // After the lg breakpoint, hidden is actually visible.
        // So the toggleSideNav below only will fire if the screen is < 992px
        // and the sideNav is open.
        if (this.sideNavHidden) {
            this.navigationService.toggleSideNav(true);
        }
    }
}
