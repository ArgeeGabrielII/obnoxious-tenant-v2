import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService } from '@common/services';

import { ToastComponent } from './toast.component';

@Component({
    template: ` <sbpro-toast [autohide]="autohide"></sbpro-toast> `,
})
class TestHostComponent {
    autohide = false;
}

describe('ToastComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: ToastComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, ToastComponent],
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
    });

    it('should display the component', () => {
        fixture.detectChanges();
        expect(hostComponentNE.querySelector('sbpro-toast')).toEqual(jasmine.anything());
    });
    it('should handle input autohide', fakeAsync(() => {
        hostComponent.autohide = true;
        spyOn(component.toastService, 'remove').and.callThrough();
        fixture.detectChanges();
        tick(5000);
        expect(component.toastService.remove).toHaveBeenCalled();
    }));
});
