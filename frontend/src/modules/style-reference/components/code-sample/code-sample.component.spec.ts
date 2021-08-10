import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UtilityService } from '@common/services';
import { PrismService } from '@modules/style-reference/services';
import { PrismServiceStub, UtilityServiceStub } from '@testing/stubs';

import { CodeSampleComponent } from './code-sample.component';

@Component({
    template: ` <sbpro-code-sample [codeSamples]="codeSamples"></sbpro-code-sample> `,
})
class TestHostComponent {
    codeSamples = [
        {
            language: 'pug',
            code: 'p test',
        },
    ];
}

describe('CodeSampleComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: CodeSampleComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let prismService: PrismService;
    let utilityService: UtilityService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, CodeSampleComponent],
            imports: [NoopAnimationsModule],
            providers: [
                { provide: PrismService, useValue: PrismServiceStub },
                { provide: UtilityService, useValue: new UtilityServiceStub() },
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        hostComponent = fixture.componentInstance;
        hostComponentDE = fixture.debugElement;
        hostComponentNE = hostComponentDE.nativeElement;

        componentDE = hostComponentDE.children[0];
        component = componentDE.componentInstance;
        componentNE = componentDE.nativeElement;

        prismService = TestBed.inject(PrismService);
        utilityService = TestBed.inject(UtilityService);

        fixture.detectChanges();
    });

    it('should display the component', () => {
        expect(hostComponentNE.querySelector('sbpro-code-sample')).toEqual(jasmine.anything());
    });
    it('should setSelectedIndex', () => {
        spyOn(prismService, 'highlightAll').and.callThrough();
        component.setSelectedIndex(0);
        expect(prismService.highlightAll).toHaveBeenCalled();
    });
    it('should copyToClipboard', () => {
        spyOn(utilityService, 'copyToClipboard');
        component.copyToClipboard(0);
        expect(utilityService.copyToClipboard).toHaveBeenCalled();
    });
});
