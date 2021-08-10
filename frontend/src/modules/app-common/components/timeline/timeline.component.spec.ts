import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TimelineComponent } from './timeline.component';

@Component({
    template: `
        <sbpro-timeline
            [someInput]="someInput"
            (someFunction)="someFunction($event)"
        ></sbpro-timeline>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('TimelineComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: TimelineComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, TimelineComponent],
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
        expect(hostComponentNE.querySelector('sbpro-timeline')).toEqual(jasmine.anything());
    });
    it('should set small class', () => {
        component.small = true;
        spyOn(component.timelineClasses, 'push').and.callThrough();
        component.ngOnInit();
        expect(component.timelineClasses.push).toHaveBeenCalledWith('timeline-sm');
    });
    it('should set xs class', () => {
        component.xs = true;
        spyOn(component.timelineClasses, 'push').and.callThrough();
        component.ngOnInit();
        expect(component.timelineClasses.push).toHaveBeenCalledWith('timeline-xs');
    });
});
