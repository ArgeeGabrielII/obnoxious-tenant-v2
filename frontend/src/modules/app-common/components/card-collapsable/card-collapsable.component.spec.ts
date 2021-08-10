import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CardCollapsableComponent } from './card-collapsable.component';

@Component({
    template: `
        <sbpro-card-collapsable
            [someInput]="someInput"
            (someFunction)="someFunction($event)"
        ></sbpro-card-collapsable>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('CardCollapsableComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: CardCollapsableComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, CardCollapsableComponent],
            imports: [NoopAnimationsModule],
            providers: [],
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
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sbpro-card-collapsable')).toEqual(jasmine.anything());
    });
    it('should remove style height after transition if collapsed', () => {
        component.collapsed = false;
        component.divElement.style.height = '3px';
        component.divElement.dispatchEvent(new TransitionEvent('transitionend'));
        expect(component.divElement.style.height).toBe('');
    });
    it('should NOT remove style height after transition if NOT collapsed', () => {
        component.collapsed = true;
        component.divElement.style.height = '3px';
        component.divElement.dispatchEvent(new TransitionEvent('transitionend'));
        expect(component.divElement.style.height).toBe('3px');
    });
    it('should toggle collapsed to true', (done) => {
        component.collapsed = false;
        component.toggle();
        fixture.detectChanges();
        spyOn(component.changeDetectorRef, 'markForCheck').and.callFake(() => {
            expect(component.collapsed).toBe(true);
            done();
        });
    });
    it('should toggle collapsed to false', () => {
        spyOn(component, 'expand').and.callThrough();
        component.collapsed = true;
        component.toggle();
        expect(component.expand).toHaveBeenCalled();
    });
});
