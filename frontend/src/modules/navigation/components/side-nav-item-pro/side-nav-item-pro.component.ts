import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { SBRouteData, SideNavItem } from '@modules/navigation/models';
import { NavigationService, SideNavService } from '@modules/navigation/services';
import objectHash from 'object-hash';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sbpro-side-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav-item-pro.component.html',
    styleUrls: ['side-nav-item-pro.component.scss'],
})
export class SideNavItemProComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('collapsibleSection') collapsibleSection!: ElementRef<HTMLDivElement>;

    @Input() sideNavItem!: SideNavItem;
    @Input() hierarchy: string[] = [];

    isActive = false;
    collapsed!: boolean;
    routeData!: SBRouteData;
    navElement!: HTMLDivElement;
    id!: string;
    hierarchyExtension!: string[];
    subscription: Subscription = new Subscription();
    afterViewInit = false;
    constructor(
        private sideNavService: SideNavService,
        public navigationService: NavigationService,
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.id = objectHash(this.sideNavItem);
        this.hierarchyExtension = [...this.hierarchy, this.id];
        if (this.sideNavItem.text === 'Dashboards') {
            this.sideNavService.setDefault(this.hierarchyExtension);
        }
        this.collapsed = !this.sideNavService.isExpanded(this.id);
        this.subscription.add(
            this.sideNavService.expand$.subscribe((ids) => {
                const thisIDisInExpandedHierarchy = !!ids.find((id) => id === this.id);
                const sameLevel = ids.length === this.hierarchyExtension.length;

                if (!thisIDisInExpandedHierarchy && sameLevel) {
                    if (!this.collapsed) {
                        this.collapse();
                    }
                }
            })
        );
        this.subscription.add(
            this.navigationService
                .currentURL$()
                .subscribe((currentURL) =>
                    this.determineIfActive(currentURL.replace(/#.*$/, ''), this.sideNavItem)
                )
        );
    }

    ngAfterViewInit() {
        this.afterViewInit = true;
        this.navElement = this.collapsibleSection.nativeElement;
        this.navElement.addEventListener('transitionend', (event) => {
            if (!this.collapsed) {
                this.navElement.style.height = '';
            }
        });
        if (this.isActive) {
            this.expand();
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    determineIfActive(url: string, sideNavItem: SideNavItem) {
        this.isActive = false;
        this.changeDetectorRef.markForCheck();
        if (sideNavItem.link) {
            this.isActive = url === sideNavItem.link;
            this.changeDetectorRef.markForCheck();
        }
        if (sideNavItem.submenu) {
            sideNavItem.submenu.forEach((submenu) => this.determineIfActiveParent(url, submenu));
        }
    }

    determineIfActiveParent(url: string, sideNavItem: SideNavItem) {
        if (sideNavItem.link && url === sideNavItem.link) {
            this.isActive = true;
            if (this.afterViewInit) {
                this.expand();
            }
            this.changeDetectorRef.markForCheck();
        }
        if (sideNavItem.submenu) {
            sideNavItem.submenu.forEach((submenu) => this.determineIfActiveParent(url, submenu));
        }
    }

    toggle() {
        if (this.sideNavItem.link) {
            this.sideNavService.saveCache(this.hierarchyExtension, this.sideNavItem.link);
            return this.router.navigate([this.sideNavItem.link]);
        }

        if (this.collapsed) {
            return this.expand();
        }
        return this.collapse();
    }

    collapse() {
        this.sideNavService.setExpanded(this.id, false);
        const navHeight = this.navElement.scrollHeight;
        const elementTransition = this.navElement.style.transition;
        this.navElement.style.transition = '';
        requestAnimationFrame(() => {
            this.navElement.style.height = navHeight + 'px';
            this.navElement.style.transition = elementTransition;
            requestAnimationFrame(() => {
                this.navElement.style.height = 0 + 'px';
                this.collapsed = true;
                this.changeDetectorRef.markForCheck();
            });
        });
    }

    expand() {
        this.sideNavService.setExpanded(this.id, true);
        this.navElement.style.height = this.navElement.scrollHeight + 'px';
        this.collapsed = false;
        this.sideNavService.expand$.next(this.hierarchyExtension);
    }
}
