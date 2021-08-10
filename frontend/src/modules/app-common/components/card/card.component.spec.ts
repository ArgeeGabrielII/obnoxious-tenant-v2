import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CardComponent } from './card.component';

@Component({
    template: `
        <sbpro-card
            [background]="background"
            [color]="color"
            [classes]="classes"
            [headerActions]="headerActions"
            [scrollable]="scrollable"
            [styled]="styled"
        ></sbpro-card>
    `,
})
class TestHostComponent {
    background = 'bg-primary';
    color = 'white';
    classes = ['classA', 'classB'];
    headerActions = false;
    scrollable = false;
    styled: undefined | 'waves' = undefined;
}

describe('CardComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: CardComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, CardComponent],
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
        expect(hostComponentNE.querySelector('sbpro-card')).toEqual(jasmine.anything());
    });

    it('should push headerActions', () => {
        hostComponent.headerActions = true;
        spyOn(component.cardClasses, 'push').and.callThrough();
        fixture.detectChanges();
        expect(component.cardClasses.push).toHaveBeenCalledWith('card-header-actions');
    });

    it('should push scrollable', () => {
        hostComponent.scrollable = true;
        spyOn(component.cardClasses, 'push').and.callThrough();
        fixture.detectChanges();
        expect(component.cardClasses.push).toHaveBeenCalledWith('card-scrollable');
    });
    it('should push styled', () => {
        hostComponent.styled = 'waves';
        spyOn(component.cardClasses, 'push').and.callThrough();
        fixture.detectChanges();
        expect(component.cardClasses.push).toHaveBeenCalledWith('card-waves');
    });
});
