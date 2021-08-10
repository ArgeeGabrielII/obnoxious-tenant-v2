import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalServiceStub, RouterStub } from '@testing/stubs';

import { ForgotPasswordSocialComponent } from './forgot-password-social.component';

@Component({
    template: ` <sbpro-forgot-password-social></sbpro-forgot-password-social> `,
})
class TestHostComponent {}

describe('ForgotPasswordSocialComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: ForgotPasswordSocialComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let modalService!: NgbModal;
    let router!: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, ForgotPasswordSocialComponent],
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
        expect(hostComponentNE.querySelector('sbpro-forgot-password-social')).toEqual(
            jasmine.anything()
        );
    });
    it('should submit if valid', () => {
        spyOn(router, 'navigate');
        spyOn(modalService, 'open').and.callThrough();
        component.emailControl.setValue('test@test.com');
        component.onSubmit();
        expect(modalService.open).toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();

        ((modalService as unknown) as ModalServiceStub).resultValue = 'DASHBOARD';
        component.onSubmit();
        expect(modalService.open).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalled();
    });
    it('should NOT submit if invalid', () => {
        spyOn(router, 'navigate');
        spyOn(modalService, 'open').and.callThrough();
        component.onSubmit();
        expect(modalService.open).not.toHaveBeenCalled();
    });
    it('should return emailControlValid', () => {
        expect(component.emailControlValid).toBe(false);

        component.emailControl.markAsTouched();
        component.emailControl.setValue('test@test.com');
        expect(component.emailControlValid).toBe(true);
    });
    it('should return emailControlInvalid', () => {
        component.emailControl.markAsTouched();
        component.emailControl.setValue('bademail');
        expect(component.emailControlInvalid).toBe(true);
    });
});
