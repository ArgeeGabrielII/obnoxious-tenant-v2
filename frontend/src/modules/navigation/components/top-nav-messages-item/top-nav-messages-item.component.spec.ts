import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TopNavMessagesItemComponent } from './top-nav-messages-item.component';

@Component({
    template: `
        <sbpro-top-nav-messages-item
            [message]="message"
            (someFunction)="someFunction($event)"
        ></sbpro-top-nav-messages-item>
    `,
})
class TestHostComponent {
    message = {
        image: '/assets/img/illustrations/profiles/profile-3.png',
        text: 'TEXT',
        details: 'DETAILS',
    };
}

describe('TopNavMessagesItemComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: TopNavMessagesItemComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, TopNavMessagesItemComponent],
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
        expect(hostComponentNE.querySelector('sbpro-top-nav-messages-item')).toEqual(
            jasmine.anything()
        );
    });
});
