import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardChartsComponent } from './dashboard-charts.component';

@Component({
    template: `
        <sbpro-dashboard-charts
            [someInput]="someInput"
            (someFunction)="someFunction($event)"
        ></sbpro-dashboard-charts>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('DashboardChartsComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: DashboardChartsComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, DashboardChartsComponent],
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
        expect(hostComponentNE.querySelector('sbpro-dashboard-charts')).toEqual(jasmine.anything());
    });
    it('should changeAreaChartRange', () => {
        expect(component.areaChartDuration).toBe('yearly');
        component.changeAreaChartRange('monthly');
        expect(component.areaChartDuration).toBe('monthly');
    });
    it('should changeBarChartRange', () => {
        expect(component.barChartDuration).toBe('yearly');
        component.changeBarChartRange('monthly');
        expect(component.barChartDuration).toBe('monthly');
    });
});
