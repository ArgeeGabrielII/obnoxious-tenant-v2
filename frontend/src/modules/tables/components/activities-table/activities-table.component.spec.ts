import { DecimalPipe } from '@angular/common';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivitiesService } from '@modules/tables/services';

import { ActivitiesTableComponent } from './activities-table.component';

@Component({
    template: `
        <sbpro-activities-table
            [someInput]="someInput"
            (someFunction)="someFunction($event)"
        ></sbpro-activities-table>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('ActivitiesTableComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: ActivitiesTableComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, ActivitiesTableComponent],
            imports: [NoopAnimationsModule],
            providers: [ActivitiesService, DecimalPipe],
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
        expect(hostComponentNE.querySelector('sbpro-activities-table')).toEqual(jasmine.anything());
    });
    it('should handle onSort', () => {
        spyOn(component.changeDetectorRef, 'detectChanges').and.callThrough();
        component.onSort({ column: 'test', direction: 'asc' });
        expect(component.changeDetectorRef.detectChanges).toHaveBeenCalled();
    });
});
