import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterStub } from '@testing/stubs';

import { OrgCreateComponent } from './org-create.component';

@Component({
    template: ` <sbpro-org-create></sbpro-org-create> `,
})
class TestHostComponent {}

describe('OrgCreateComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: OrgCreateComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let router!: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, OrgCreateComponent],
            imports: [NoopAnimationsModule],
            providers: [FormBuilder, { provide: Router, useValue: new RouterStub() }],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponentDE = fixture.debugElement;
        hostComponentNE = hostComponentDE.nativeElement;

        componentDE = hostComponentDE.children[0];
        component = componentDE.componentInstance;
        componentNE = componentDE.nativeElement;

        fixture.detectChanges();

        router = TestBed.inject(Router);
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sbpro-org-create')).toEqual(jasmine.anything());
    });
    it('should move to the next step if VALID', () => {
        spyOn(router, 'navigate');
        component.onSubmit();
        expect(router.navigate).not.toHaveBeenCalled();
        component.nameControl.setValue('test');
        component.onSubmit();
        expect(router.navigate).toHaveBeenCalled();
    });
    it('should return emailControlValid', () => {
        expect(component.nameControlValid).toBe(false);

        component.nameControl.markAsTouched();
        component.nameControl.setValue('test');
        expect(component.nameControlValid).toBe(true);
    });
    it('should return nameControlInvalid', () => {
        component.nameControl.markAsTouched();
        expect(component.nameControlInvalid).toBe(true);
    });
});
