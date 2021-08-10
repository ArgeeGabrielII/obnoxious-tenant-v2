import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StepComponent } from './step.component';

@Component({
    template: `
        <sbpro-step [someInput]="someInput" (someFunction)="someFunction($event)"></sbpro-step>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('StepComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: StepComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, StepComponent],
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
        expect(hostComponentNE.querySelector('sbpro-step')).toEqual(jasmine.anything());
    });
    it('should set large class', () => {
        component.large = true;
        spyOn(component.stepClasses, 'push').and.callThrough();
        component.ngOnInit();
        expect(component.stepClasses.push).toHaveBeenCalledWith('step-lg');
    });
    it('should set color', () => {
        component.color = 'primary';
        spyOn(component.stepClasses, 'push').and.callThrough();
        component.ngOnInit();
        expect(component.stepClasses.push).toHaveBeenCalledWith('step-primary');
    });
});
