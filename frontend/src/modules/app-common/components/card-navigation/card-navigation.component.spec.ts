import { ChangeDetectorRef, Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SBProTocItemDirective } from '@modules/toc/directives';

import { CardNavigationComponent } from './card-navigation.component';

@Component({
    template: `
        <sbpro-card-navigation
            sbproTocItem="Tabs"
            [navNames]="['Test One', 'Test Two']"
            [templates]="[testOne, testTwo]"
        >
            <ng-template #testOne
                ><h5 class="card-title">Test One Title</h5>
                <p class="card-text">test one text</p>
            </ng-template>
            <ng-template #testTwo
                ><h5 class="card-title">Test Two Title</h5>
                <p class="card-text">test two text</p>
            </ng-template>
        </sbpro-card-navigation>
    `,
})
class TestHostComponent {}

describe('CardNavigationComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: CardNavigationComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, CardNavigationComponent],
            imports: [NoopAnimationsModule],
            providers: [SBProTocItemDirective, ChangeDetectorRef],
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
        expect(hostComponentNE.querySelector('sbpro-card-navigation')).toEqual(jasmine.anything());
    });
    it('should process after style transition', () => {
        spyOn(component.changeDetectorRef, 'detectChanges').and.callThrough();
        component.fadeableElement.style.opacity = '0';
        component.fadeableElement.dispatchEvent(new TransitionEvent('transitionend'));
        expect(component.fadeableElement.style.opacity).toBe('100');
        expect(component.changeDetectorRef.detectChanges).toHaveBeenCalled();
    });
    it('setSelectedIndex', () => {
        component.fadeableElement.style.opacity = '100';
        component.setSelectedIndex(1);
        expect(component.fadeableElement.style.opacity).toBe('0');
        expect(component.selectedIndex).toBe(1);
    });
});
