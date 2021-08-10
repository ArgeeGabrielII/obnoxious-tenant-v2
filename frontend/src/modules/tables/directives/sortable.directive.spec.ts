import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SBSortableHeaderDirective } from './sortable.directive';

@Component({
    template: '<th sbSortable></th>',
})
class TestComponent {}

describe('SBSortableHeaderDirective', () => {
    let fixture: ComponentFixture<TestComponent>;

    let testComponent: TestComponent;
    let testComponentDE: DebugElement;
    let testComponentNE: Element;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [SBSortableHeaderDirective, TestComponent],
        }).createComponent(TestComponent);

        fixture.detectChanges();

        testComponent = fixture.componentInstance;
        testComponentDE = fixture.debugElement;
        testComponentNE = testComponentDE.nativeElement;
    });

    it('should have param set to test', () => {
        const directiveInstance = testComponentDE.query(By.directive(SBSortableHeaderDirective));
        expect(directiveInstance.attributes.sbSortable).toBeDefined();
    });
    it('should rotate', () => {
        const directiveInstance = testComponentDE.query(By.directive(SBSortableHeaderDirective));
        const directive = directiveInstance.injector.get(SBSortableHeaderDirective);
        spyOn(directive.sort, 'emit').and.callThrough();
        directive.rotate();
        expect(directive.sort.emit).toHaveBeenCalled();
    });
});
