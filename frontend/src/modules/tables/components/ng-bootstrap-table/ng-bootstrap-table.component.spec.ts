import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeDetectorRefStub } from '@testing/stubs';

import { NgBootstrapTableComponent } from './ng-bootstrap-table.component';

@Component({
    template: `
        <sb-ng-bootstrap-table
            [someInput]="someInput"
            (someFunction)="someFunction($event)"
        ></sb-ng-bootstrap-table>
    `,
})
class TestHostComponent {
    // someInput = 1;
    // someFunction(event: Event) {}
}

describe('NgBootstrapTableComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: NgBootstrapTableComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, NgBootstrapTableComponent],
            imports: [NoopAnimationsModule],
            providers: [DecimalPipe],
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
        expect(hostComponentNE.querySelector('sb-ng-bootstrap-table')).toEqual(jasmine.anything());
    });
    it('should handle onSort', () => {
        spyOn(component.changeDetectorRef, 'detectChanges').and.callThrough();
        component.onSort({ column: 'test', direction: 'asc' });
        expect(component.changeDetectorRef.detectChanges).toHaveBeenCalled();
    });
});
