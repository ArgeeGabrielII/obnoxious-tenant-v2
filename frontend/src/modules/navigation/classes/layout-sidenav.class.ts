import { ChangeDetectorRef, Directive, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { UtilityService } from '@common/services';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';

@Directive()
export class LayoutSidenav implements OnInit, OnDestroy {
    @HostBinding('class.sidenav-toggled') sideNavHidden = false;
    subscription: Subscription = new Subscription();

    utilityService: UtilityService;
    navigationService: NavigationService;
    changeDetectorRef: ChangeDetectorRef;

    constructor(
        utilityService: UtilityService,
        navigationService: NavigationService,
        changeDetectorRef: ChangeDetectorRef
    ) {
        this.utilityService = utilityService;
        this.navigationService = navigationService;
        this.changeDetectorRef = changeDetectorRef;
    }

    ngOnInit() {
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
