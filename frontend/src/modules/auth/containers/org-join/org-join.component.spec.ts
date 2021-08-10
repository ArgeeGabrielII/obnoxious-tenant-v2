import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalServiceStub, RouterStub } from '@testing/stubs';

import { OrgJoinComponent } from './org-join.component';

@Component({
    template: ` <sbpro-org-join></sbpro-org-join> `,
})
class TestHostComponent {}

describe('OrgJoinComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: OrgJoinComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let modalService!: NgbModal;
    let router!: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, OrgJoinComponent],
            imports: [NoopAnimationsModule],
            providers: [
                FormBuilder,
                { provide: Router, useValue: new RouterStub() },
                { provide: NgbModal, useValue: new ModalServiceStub() },
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

        fixture.detectChanges();

        modalService = TestBed.inject(NgbModal);
        router = TestBed.inject(Router);
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sbpro-org-join')).toEqual(jasmine.anything());
    });
    it('should submit for access code if valid', () => {
        spyOn(router, 'navigate');
        spyOn(modalService, 'open').and.callThrough();
        component.codeControl.setValue('test');
        component.onSubmitCode();
        expect(modalService.open).toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();

        component.codeControl.setValue('test');
        ((modalService as unknown) as ModalServiceStub).resultValue = 'DASHBOARD';
        component.onSubmitCode();
        expect(modalService.open).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalled();
    });
    it('should NOT submit for access code if invalid', () => {
        spyOn(router, 'navigate');
        spyOn(modalService, 'open').and.callThrough();
        component.onSubmitCode();
        expect(modalService.open).not.toHaveBeenCalled();
    });
    it('should submit for request if valid', () => {
        spyOn(router, 'navigate');
        spyOn(modalService, 'open').and.callThrough();
        component.nameControl.setValue('test');
        component.onSubmitRequest();
        expect(modalService.open).toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();

        component.nameControl.setValue('test');
        ((modalService as unknown) as ModalServiceStub).resultValue = 'DASHBOARD';
        component.onSubmitRequest();
        expect(modalService.open).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalled();
    });
    it('should NOT submit for request if invalid', () => {
        spyOn(router, 'navigate');
        spyOn(modalService, 'open').and.callThrough();
        component.onSubmitRequest();
        expect(modalService.open).not.toHaveBeenCalled();
    });
    it('should return codeControlValid', () => {
        expect(component.codeControlValid).toBe(false);

        component.codeControl.markAsTouched();
        component.codeControl.setValue('test');
        expect(component.codeControlValid).toBe(true);
    });
    it('should return codeControlInvalid', () => {
        component.codeControl.markAsTouched();
        expect(component.codeControlInvalid).toBe(true);
    });
    it('should return nameControlValid', () => {
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
