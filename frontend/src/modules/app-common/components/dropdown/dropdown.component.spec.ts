import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DropdownComponent } from './dropdown.component';

@Component({
    template: `
        <sbpro-dropdown
            [dropdownStyle]="dropdownStyle"
            [background]="background"
            [color]="color"
            [classes]="classes"
            [animation]="animation"
        ></sbpro-dropdown>
    `,
})
class TestHostComponent {
    dropdownStyle: 'icon' | 'text' = 'icon';
    background!: string;
    color!: string;
    classes!: string[];
    animation!: 'animated--fade-in' | 'animated--fade-in-up';
}

describe('DropdownComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: DropdownComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, DropdownComponent, NgbDropdown],
            imports: [NoopAnimationsModule, NgbModule],
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
        expect(hostComponentNE.querySelector('sbpro-dropdown')).toEqual(jasmine.anything());
    });
    it('should handle input style "icon"', () => {
        hostComponent.dropdownStyle = 'icon';
        fixture.detectChanges();
        expect(component.customClasses.find((c) => c === 'no-caret')).toBeDefined();
    });
    it('should handle input style "text"', () => {
        hostComponent.dropdownStyle = 'text';
        fixture.detectChanges();
        expect(component.customClasses.find((c) => c === 'no-caret')).toBeUndefined();
    });
    it('should handle input background', () => {
        hostComponent.background = 'BACKGROUND';
        fixture.detectChanges();
        expect(component.dropdownButtonClasses.find((c) => c === 'BACKGROUND')).toBeDefined();
    });
    it('should handle input color', () => {
        hostComponent.color = 'COLOR';
        fixture.detectChanges();
        expect(component.dropdownButtonClasses.find((c) => c === 'COLOR')).toBeDefined();
    });
    it('should handle input classes', () => {
        hostComponent.classes = ['CLASS'];
        fixture.detectChanges();
        expect(component.customClasses.find((c) => c === 'CLASS')).toBeDefined();
    });
    it('should handle input animation', () => {
        hostComponent.animation = 'animated--fade-in';
        fixture.detectChanges();
        expect(component.dropdownMenuClasses.find((c) => c === 'animated--fade-in')).toBeDefined();
    });
    it('should close', () => {
        fixture.detectChanges();
        spyOn(component.dropdown, 'close').and.callThrough();
        component.close();
        expect(component.dropdown.close).toHaveBeenCalled();
    });
});
