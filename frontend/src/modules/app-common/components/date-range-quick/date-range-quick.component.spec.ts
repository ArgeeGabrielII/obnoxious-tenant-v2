import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DateRangeService } from '@common/services';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DropdownComponent } from '../dropdown/dropdown.component';

import { DateRangeQuickComponent } from './date-range-quick.component';

@Component({
    template: `
        <sbpro-date-range-quick
            [someInput]="someInput"
            (someFunction)="someFunction($event)"
        ></sbpro-date-range-quick>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('DateRangeQuickComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: DateRangeQuickComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let dateRangeService: DateRangeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, DateRangeQuickComponent, DropdownComponent],
            imports: [NoopAnimationsModule, NgbModule],
            providers: [DateRangeService],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponentDE = fixture.debugElement;
        hostComponentNE = hostComponentDE.nativeElement;

        componentDE = hostComponentDE.children[0];
        component = componentDE.componentInstance;
        componentNE = componentDE.nativeElement;

        dateRangeService = TestBed.inject(DateRangeService);

        fixture.detectChanges();
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sbpro-date-range-quick')).toEqual(jasmine.anything());
    });
    it('should setRange', () => {
        spyOn(dateRangeService, 'setRange').and.callThrough();
        component.setRange('TODAY');
        expect(dateRangeService.setRange).toHaveBeenCalled();
    });
    it('should set fromDate via onDateSelection', () => {
        const selectedDate: NgbDate = new NgbDate(2020, 1, 1);
        spyOn(dateRangeService, 'setCustom').and.callThrough();
        component.fromDate = null;
        component.toDate = null;
        component.onDateSelection(selectedDate);
        expect(component.fromDate).toEqual(selectedDate);
        expect(dateRangeService.setCustom).not.toHaveBeenCalled();
    });
    it('should set fromDate via onDateSelection', () => {
        const dateA: NgbDate = new NgbDate(2020, 1, 1);
        const dateB: NgbDate = new NgbDate(2020, 1, 2);
        spyOn(dateRangeService, 'setCustom').and.callThrough();
        component.fromDate = dateA;
        component.toDate = null;
        component.onDateSelection(dateB);
        expect(component.toDate).toEqual(dateB);
        expect(dateRangeService.setCustom).toHaveBeenCalled();
    });
    it('should set toDate to null and set fromDate via onDateSelection', () => {
        const dateA: NgbDate = new NgbDate(2020, 2, 1);
        const dateB: NgbDate = new NgbDate(2020, 2, 2);
        const dateC: NgbDate = new NgbDate(2020, 1, 1);
        spyOn(dateRangeService, 'setCustom').and.callThrough();
        component.fromDate = dateA;
        component.toDate = dateB;
        component.onDateSelection(dateC);
        expect(component.toDate).toEqual(null);
        expect(component.fromDate).toEqual(dateC);
        expect(dateRangeService.setCustom).not.toHaveBeenCalled();
    });
    it('should isHovered', () => {
        const dateA: NgbDate = new NgbDate(2020, 2, 1);
        const dateB: NgbDate = new NgbDate(2020, 2, 2);
        component.hoveredDate = new NgbDate(2020, 2, 4);
        component.fromDate = dateA;
        component.toDate = null;
        component.isHovered(dateB);
    });
});
