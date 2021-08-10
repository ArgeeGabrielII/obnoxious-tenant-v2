import { Component, DebugElement, NO_ERRORS_SCHEMA, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalServiceStub } from '@testing/stubs';

import { ModalsVerticallyCenteredComponent } from './modals-vertically-centered.component';

@Component({
    template: `
        <sbpro-modals-vertically-centered
            [someInput]="someInput"
            (someFunction)="someFunction($event)"
        ></sbpro-modals-vertically-centered>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('ModalsVerticallyCenteredComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: ModalsVerticallyCenteredComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let modalService!: NgbModal;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, ModalsVerticallyCenteredComponent],
            imports: [NoopAnimationsModule],
            providers: [{ provide: NgbModal, useValue: new ModalServiceStub() }],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponentDE = fixture.debugElement;
        hostComponentNE = hostComponentDE.nativeElement;

        componentDE = hostComponentDE.children[0];
        component = componentDE.componentInstance;
        componentNE = componentDE.nativeElement;

        modalService = TestBed.inject(NgbModal);

        fixture.detectChanges();
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sbpro-modals-vertically-centered')).toEqual(
            jasmine.anything()
        );
    });
    it('should open a modal', () => {
        spyOn(modalService, 'open').and.callThrough();
        component.open({} as TemplateRef<unknown>);
        expect(modalService.open).toHaveBeenCalled();
    });
    it('should log dismiss reasons', () => {
        expect(component._getDismissReason(ModalDismissReasons.ESC)).toBe('by pressing ESC');
        expect(component._getDismissReason(ModalDismissReasons.BACKDROP_CLICK)).toBe(
            'by clicking on a backdrop'
        );
        expect(component._getDismissReason('TEST')).toBe('with: TEST');
    });
});
