import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '@testing/stubs';

import { WizardComponent } from './wizard.component';

@Component({
    template: `
        <sbpro-wizard [someInput]="someInput" (someFunction)="someFunction($event)"></sbpro-wizard>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('WizardComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: WizardComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let activatedRoute: ActivatedRoute;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, WizardComponent],
            imports: [NoopAnimationsModule],
            providers: [
                { provide: ActivatedRoute, useValue: new ActivatedRouteStub({ step: 'account' }) },
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

        activatedRoute = TestBed.inject(ActivatedRoute);
        fixture.detectChanges();
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sbpro-wizard')).toEqual(jasmine.anything());
    });
});

describe('WizardComponent no query params', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: WizardComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let activatedRoute: ActivatedRoute;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, WizardComponent],
            imports: [NoopAnimationsModule],
            providers: [{ provide: ActivatedRoute, useValue: new ActivatedRouteStub({}) }],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponentDE = fixture.debugElement;
        hostComponentNE = hostComponentDE.nativeElement;

        componentDE = hostComponentDE.children[0];
        component = componentDE.componentInstance;
        componentNE = componentDE.nativeElement;

        activatedRoute = TestBed.inject(ActivatedRoute);
        fixture.detectChanges();
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sbpro-wizard')).toEqual(jasmine.anything());
    });
});
