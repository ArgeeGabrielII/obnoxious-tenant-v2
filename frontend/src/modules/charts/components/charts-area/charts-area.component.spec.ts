import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsService } from '@modules/charts/services';

import { ChartsAreaComponent } from './charts-area.component';

@Component({
    template: `
        <sb-charts-area
            [someInput]="someInput"
            (someFunction)="someFunction($event)"
        ></sb-charts-area>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('ChartsAreaComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: ChartsAreaComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, ChartsAreaComponent],
            imports: [NoopAnimationsModule],
            providers: [ChartsService],
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
        expect(hostComponentNE.querySelector('sb-charts-area')).toEqual(jasmine.anything());
    });
    it('should format the label', () => {
        if (
            component.chart.options.tooltips &&
            component.chart.options.tooltips.callbacks &&
            component.chart.options.tooltips.callbacks.label
        ) {
            const label = component.chart.options.tooltips.callbacks.label(
                { datasetIndex: 0, yLabel: 'Y_LABEL' },
                { datasets: [{ label: 'testLabel' }] }
            );

            expect(label).toBe('testLabel: Y_LABEL');
        }
    });
    it('should format the label without datasets', () => {
        if (
            component.chart.options.tooltips &&
            component.chart.options.tooltips.callbacks &&
            component.chart.options.tooltips.callbacks.label
        ) {
            const label = component.chart.options.tooltips.callbacks.label(
                { datasetIndex: 0, yLabel: 'Y_LABEL' },
                {}
            );

            expect(label).toBe(': Y_LABEL');
        }
    });
    it('should react to changes', () => {
        spyOn(component, '_renderChart').and.callThrough();
        component.ngOnChanges({});
        component.ngOnChanges({
            duration: {
                previousValue: {},
                currentValue: {},
                firstChange: true,
                isFirstChange: () => true,
            },
        });
        component.ngOnChanges({
            duration: {
                previousValue: {},
                currentValue: {},
                firstChange: false,
                isFirstChange: () => false,
            },
        });
        delete component.chart;
        component.ngOnChanges({
            duration: {
                previousValue: {},
                currentValue: {},
                firstChange: false,
                isFirstChange: () => false,
            },
        });
        expect(component._renderChart).toHaveBeenCalledTimes(2);
    });
});
