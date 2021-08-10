import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UtilityService } from '@common/services';
import { TocServiceStub, UtilityServiceStub } from '@testing/stubs';

import { TocService } from '../services';

import { SBProTocItemDirective } from './toc-item.directive';

@Component({
    template: '<div sbproTocItem></div>',
})
class TestComponent {}

describe('SBProTocItemDirective', () => {
    let fixture: ComponentFixture<TestComponent>;

    let testComponent: TestComponent;
    let testComponentDE: DebugElement;
    let testComponentNE: Element;

    let utilityService: UtilityService;
    let tocService: TocService;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [SBProTocItemDirective, TestComponent],
            providers: [
                { provide: TocService, useValue: TocServiceStub },
                TocService,
                { provide: UtilityService, useValue: new UtilityServiceStub() },
            ],
        }).createComponent(TestComponent);

        fixture.detectChanges();

        testComponent = fixture.componentInstance;
        testComponentDE = fixture.debugElement;
        testComponentNE = testComponentDE.nativeElement;

        utilityService = TestBed.inject(UtilityService);
        tocService = TestBed.inject(TocService);
    });

    it('should have param set to test', () => {
        const directiveInstance = testComponentDE.query(By.directive(SBProTocItemDirective));
        expect(directiveInstance.attributes.sbproTocItem).toBeDefined();
    });
    it('should log error if !this.hasIntersectionObserver', () => {
        const directiveInstance = testComponentDE.query(By.directive(SBProTocItemDirective));
        const directive = directiveInstance.injector.get(SBProTocItemDirective);
        directive.hasIntersectionObserver = false;
        directive.ngOnInit();
        expect(directive.inViewport).toBe(true);
    });
    it('should do nothing in ngAfterViewInit if !this.hasIntersectionObserver', () => {
        const directiveInstance = testComponentDE.query(By.directive(SBProTocItemDirective));
        const directive = directiveInstance.injector.get(SBProTocItemDirective);
        directive.hasIntersectionObserver = false;
        delete directive.observer;
        directive.ngAfterViewInit();
        expect(directive.observer).toBeUndefined();
    });
    it('should clean up observer onDestroy', () => {
        const directiveInstance = testComponentDE.query(By.directive(SBProTocItemDirective));
        const directive = directiveInstance.injector.get(SBProTocItemDirective);
        spyOn(directive.observer, 'unobserve');
        directive.ngOnDestroy();
        expect(directive.observer.unobserve).toHaveBeenCalled();
    });
    it('should detect IntersectionObserver', () => {
        const directiveInstance = testComponentDE.query(By.directive(SBProTocItemDirective));
        const directive = directiveInstance.injector.get(SBProTocItemDirective);
        spyOnProperty(utilityService, 'window').and.returnValue({});
        expect(directive.intersectionObserverFeatureDetection()).toBeFalse();
    });
    it('should polyfill', () => {
        const directiveInstance = testComponentDE.query(By.directive(SBProTocItemDirective));
        const directive = directiveInstance.injector.get(SBProTocItemDirective);
        spyOnProperty(utilityService, 'window').and.returnValue({
            IntersectionObserver: {},
            IntersectionObserverEntry: { prototype: {} },
        });
        directive.intersectionObserverFeatureDetection();
        expect(
            utilityService.window.IntersectionObserverEntry.prototype.isIntersecting
        ).toBeFalse();
    });
    it('should handle intersectionObserverCallback', () => {
        const directiveInstance = testComponentDE.query(By.directive(SBProTocItemDirective));
        const directive = directiveInstance.injector.get(SBProTocItemDirective);
        spyOn(tocService.tocListener$, 'next').and.callThrough();
        directive.inViewport = true;
        directive.intersectionObserverCallback([
            { isIntersecting: true } as IntersectionObserverEntry,
        ]);
        expect(tocService.tocListener$.next).not.toHaveBeenCalled();

        directive.inViewport = true;
        directive.intersectionObserverCallback([
            { isIntersecting: false } as IntersectionObserverEntry,
        ]);
        expect(tocService.tocListener$.next).toHaveBeenCalled();
    });
});
