import { ChangeDetectorRef, Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UtilityService } from '@common/services';
import { NavigationService } from '@modules/navigation/services';
import { NavigationServiceStub, UtilityServiceStub } from '@testing/stubs';

import { LayoutDashboardComponent } from './layout-dashboard.component';

@Component({
    template: ` <sbpro-layout-dashboard [light]="light"></sbpro-layout-dashboard> `,
})
class TestHostComponent {
    light = false;
}

describe('LayoutDashboardComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: LayoutDashboardComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let navigationService: NavigationService;
    let utilityService: UtilityService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, LayoutDashboardComponent],
            imports: [NoopAnimationsModule],
            providers: [
                { provide: UtilityService, useValue: new UtilityServiceStub() },
                { provide: NavigationService, useValue: NavigationServiceStub },
                ChangeDetectorRef,
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
        utilityService = TestBed.inject(UtilityService);
    });

    it('should display the component', () => {
        fixture.detectChanges();
        expect(hostComponentNE.querySelector('sbpro-layout-dashboard')).toEqual(jasmine.anything());
    });
    it('should handle input style "icon"', () => {
        hostComponent.light = true;
        fixture.detectChanges();
        expect(component.sidenavStyle).toBe('sidenav-light');
    });
    it('should NOT closeSideNavIfOpen if width >= 992 (lg)', () => {
        spyOnProperty(utilityService.window, 'innerWidth').and.returnValue(1000);
        spyOn(navigationService, 'toggleSideNav');
        component.sideNavHidden = true;
        component.closeSideNavIfOpen();
        expect(navigationService.toggleSideNav).not.toHaveBeenCalled();
    });
    it('should closeSideNavIfOpen if width < 992 (lg)', () => {
        spyOnProperty(utilityService.window, 'innerWidth').and.returnValue(500);
        spyOn(navigationService, 'toggleSideNav');
        component.sideNavHidden = true;
        component.closeSideNavIfOpen();
        expect(navigationService.toggleSideNav).toHaveBeenCalledTimes(1);
        component.sideNavHidden = false;
        component.closeSideNavIfOpen();
        expect(navigationService.toggleSideNav).toHaveBeenCalledTimes(1);
    });
});
