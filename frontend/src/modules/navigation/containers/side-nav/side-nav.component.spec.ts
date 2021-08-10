import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '@modules/auth/services';
import { NavigationService } from '@modules/navigation/services';
import { NavigationServiceStub } from '@testing/stubs';

import { SideNavComponent } from './side-nav.component';

@Component({
    template: `
        <sb-side-nav [someInput]="someInput" (someFunction)="someFunction($event)"></sb-side-nav>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('SideNavComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: SideNavComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let navigationService: NavigationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, SideNavComponent],
            imports: [NoopAnimationsModule],
            providers: [
                { provide: NavigationService, useValue: NavigationServiceStub },
                UserService,
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

        fixture.detectChanges();
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sb-side-nav')).toEqual(jasmine.anything());
    });
});
