import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { NavigationService, SideNavService } from '@modules/navigation/services';
import { MockSideNavItem } from '@testing/mocks';
import { NavigationServiceStub, RouterStub, SideNavServiceStub } from '@testing/stubs';

import { SideNavItemProComponent } from './side-nav-item-pro.component';

const mockSideNavItem = new MockSideNavItem();

@Component({
    template: ` <sbpro-side-nav-item [sideNavItem]="sideNavItem"></sbpro-side-nav-item> `,
})
class TestHostComponent {
    sideNavItem = mockSideNavItem;
}

describe('SideNavItemProComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: SideNavItemProComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let navigationService: NavigationService;
    let sideNavService: SideNavService;

    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, SideNavItemProComponent],
            imports: [NoopAnimationsModule],
            providers: [
                { provide: NavigationService, useValue: NavigationServiceStub },
                { provide: SideNavService, useValue: SideNavServiceStub },
                { provide: Router, useValue: new RouterStub() },
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponentDE = fixture.debugElement;
        hostComponentNE = hostComponentDE.nativeElement;

        componentDE = hostComponentDE.children[0];
        component = componentDE.componentInstance;
        componentNE = componentDE.nativeElement;

        navigationService = TestBed.inject(NavigationService);
        sideNavService = TestBed.inject(SideNavService);

        router = TestBed.inject(Router);

        fixture.detectChanges();
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sbpro-side-nav-item')).toEqual(jasmine.anything());
    });
    it('should unsusbscribe on Destroy', () => {
        spyOn(component.subscription, 'unsubscribe').and.callThrough();
        component.ngOnDestroy();
        expect(component.subscription.unsubscribe).toHaveBeenCalled();
    });
    it('should collapse on expand$', () => {
        spyOn(component, 'collapse').and.callThrough();
        sideNavService.expand$.next(['123']);
        expect(component.collapse).toHaveBeenCalledTimes(1);

        component.id = '123';
        sideNavService.expand$.next(['123']);
        expect(component.collapse).toHaveBeenCalledTimes(1);
    });
    it('should set style height to empty string on transitioned', () => {
        component.navElement.style.height = '3px';
        component.navElement.dispatchEvent(new TransitionEvent('transitionend'));
        expect(component.navElement.style.height).toBe('');
        component.navElement.style.height = '3px';
        component.collapsed = true;
        component.navElement.dispatchEvent(new TransitionEvent('transitionend'));
        expect(component.navElement.style.height).toBe('3px');
    });
    it('should determine if active', () => {
        component.determineIfActive('test', { text: 'Test' });
        expect(component.isActive).toBe(false);
        component.determineIfActive('test', { text: 'Test', submenu: [{ text: 'Sub' }] });
    });
    it('should determine if active parent', () => {
        component.determineIfActiveParent('test', { text: 'Test', link: 'test' });
        expect(component.isActive).toBe(true);
        component.determineIfActiveParent('test', { text: 'Test', submenu: [{ text: 'Sub' }] });
    });
    it('should toggle', () => {
        spyOn(router, 'navigate');
        component.toggle();
        expect(router.navigate).toHaveBeenCalled();

        spyOn(component, 'expand').and.callThrough();
        spyOn(component, 'collapse').and.callThrough();

        component.sideNavItem.link = undefined;

        component.collapsed = true;
        expect(router.navigate).toHaveBeenCalled();
        component.toggle();
        expect(component.expand).toHaveBeenCalled();
        component.toggle();
        expect(component.collapse).toHaveBeenCalled();
    });
    it('should expand if active', () => {
        spyOn(component, 'expand');
        component.isActive = true;
        component.ngAfterViewInit();
        expect(component.expand).toHaveBeenCalled();
    });
    it('should not expand for active parent until after viewInit', () => {
        spyOn(component, 'expand');
        component.afterViewInit = false;
        component.determineIfActiveParent('test', { text: 'Test', link: 'test' });
        expect(component.expand).not.toHaveBeenCalled();
    });
    it('should setDefault if "Dashbords" ', () => {
        spyOn(sideNavService, 'setDefault');
        component.sideNavItem.text = 'Dashboards';
        component.ngOnInit();
        expect(sideNavService.setDefault).toHaveBeenCalled();
    });
    it('should only collapse if it is not already collapsed', () => {
        spyOn(component, 'collapse').and.callThrough();
        component.collapsed = true;
        sideNavService.expand$.next(['123']);
        expect(component.collapse).not.toHaveBeenCalled();
    });
});
