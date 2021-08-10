import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService } from '@common/services';

import { ToastDemoComponent } from './toast-demo.component';

@Component({
    template: ` <sbpro-toast-demo></sbpro-toast-demo> `,
})
class TestHostComponent {}

describe('ToastDemoComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: ToastDemoComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let toastService: ToastService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, ToastDemoComponent],
            imports: [NoopAnimationsModule],
            providers: [ToastService],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponentDE = fixture.debugElement;
        hostComponentNE = hostComponentDE.nativeElement;

        componentDE = hostComponentDE.children[0];
        component = componentDE.componentInstance;
        componentNE = componentDE.nativeElement;

        toastService = TestBed.inject(ToastService);

        fixture.detectChanges();
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sbpro-toast-demo')).toEqual(jasmine.anything());
    });
    it('should show toast', () => {
        spyOn(toastService, 'show').and.callThrough();
        component.showToast('HEADER', 'BODY');
        expect(toastService.show).toHaveBeenCalled();
    });
});
