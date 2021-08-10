import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ProgressbarComponent } from './progressbar.component';

@Component({
    template: `
        <sbpro-progress-bar [striped]="striped" [animated]="animated"></sbpro-progress-bar>
    `,
})
class TestHostComponent {
    striped = false;
    animated = false;
}

describe('ProgressbarComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: ProgressbarComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, ProgressbarComponent],
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
    });

    it('should display the component', () => {
        fixture.detectChanges();
        expect(hostComponentNE.querySelector('sbpro-progress-bar')).toEqual(jasmine.anything());
    });
    it('should handle input striped', () => {
        hostComponent.striped = true;
        fixture.detectChanges();
        expect(
            component.progressBarClasses.find((c) => c === 'progress-bar-striped')
        ).toBeDefined();
    });
    it('should handle input animated', () => {
        hostComponent.animated = true;
        fixture.detectChanges();
        expect(
            component.progressBarClasses.find((c) => c === 'progress-bar-animated')
        ).toBeDefined();
    });
});
