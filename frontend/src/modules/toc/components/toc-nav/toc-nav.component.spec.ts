import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { TOCItem } from '@modules/toc/models';
import { TocService } from '@modules/toc/services';
import { TOCIndexItemInViewMock, TOCIndexItemMock, TOCItemMock } from '@testing/mocks';
import { ActivatedRouteStub, RouterStub, TocServiceStub } from '@testing/stubs';

import { TocNavComponent } from './toc-nav.component';

@Component({
    template: ` <sbpro-toc-nav [tocIndex]="tocIndex"></sbpro-toc-nav> `,
})
class TestHostComponent {
    tocIndex = [new TOCIndexItemMock('123')];
}

describe('TocNavComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostComponent: TestHostComponent;
    let hostComponentDE: DebugElement;
    let hostComponentNE: Element;

    let component: TocNavComponent;
    let componentDE: DebugElement;
    let componentNE: Element;

    let tocService: TocService;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHostComponent, TocNavComponent],
            imports: [NoopAnimationsModule],
            providers: [
                { provide: TocService, useValue: TocServiceStub },
                { provide: ActivatedRoute, useValue: ActivatedRouteStub },
                { provide: Router, useValue: new RouterStub() },
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

        tocService = TestBed.inject(TocService);
        router = TestBed.inject(Router);
    });

    it('should display the component', () => {
        fixture.detectChanges();
        expect(hostComponentNE.querySelector('sbpro-toc-nav')).toEqual(jasmine.anything());
    });
    it('should NOT react to tocService', () => {
        spyOn(component.changeDetectorRef, 'detectChanges').and.callThrough();
        hostComponent.tocIndex = [];
        fixture.detectChanges();

        tocService.tocListener$.next(new TOCItemMock('123'));
        expect(component.changeDetectorRef.detectChanges).toHaveBeenCalledTimes(1);
    });
    it('should react to tocService', () => {
        spyOn(component.changeDetectorRef, 'detectChanges').and.callThrough();
        hostComponent.tocIndex = [new TOCIndexItemMock('123')];
        fixture.detectChanges();
        tocService.tocListener$.next(new TOCItemMock('123'));
        expect(component.changeDetectorRef.detectChanges).toHaveBeenCalledTimes(1);
    });
    it('should react to tocService with !foundTitle', () => {
        spyOn(component.changeDetectorRef, 'detectChanges').and.callThrough();
        hostComponent.tocIndex = [new TOCIndexItemMock('123')];
        fixture.detectChanges();
        tocService.tocListener$.next(new TOCItemMock('234'));
        expect(component.changeDetectorRef.detectChanges).toHaveBeenCalledTimes(1);
    });
    it('should react to tocService with !foundTitle and return', () => {
        spyOn(component.changeDetectorRef, 'detectChanges').and.callThrough();
        fixture.detectChanges();
        tocService.tocListener$.next(new TOCItemMock('789'));
        expect(component.changeDetectorRef.detectChanges).toHaveBeenCalledTimes(1);
    });
    it('should react to tocService with !foundTitle and handle topInView', () => {
        spyOn(component.changeDetectorRef, 'detectChanges').and.callThrough();
        hostComponent.tocIndex = [new TOCIndexItemMock('123')];

        fixture.detectChanges();
        tocService.tocListener$.next(new TOCItemMock('234', true));
        expect(component.changeDetectorRef.detectChanges).toHaveBeenCalledTimes(2);
    });
    it('should react to tocService with !foundTitle and no children', () => {
        spyOn(component.changeDetectorRef, 'detectChanges').and.callThrough();
        const tocIndexItemMock = new TOCIndexItemMock('123');
        delete tocIndexItemMock.children;
        hostComponent.tocIndex = [tocIndexItemMock];
        fixture.detectChanges();
        tocService.tocListener$.next(new TOCItemMock('234', true));
        expect(component.changeDetectorRef.detectChanges).toHaveBeenCalledTimes(1);
    });
    it('should react to tocService with foundTitle and topIvView', () => {
        spyOn(component.changeDetectorRef, 'detectChanges').and.callThrough();
        spyOn(component, '_mapToIndex').and.returnValue(
            new TOCIndexItemInViewMock('123') as TOCItem
        );
        hostComponent.tocIndex = [new TOCIndexItemMock('123')];
        fixture.detectChanges();
        tocService.tocListener$.next(new TOCItemMock('123', true));
        expect(component.changeDetectorRef.detectChanges).toHaveBeenCalledTimes(2);
    });
    it('should route for navigateToTitle', () => {
        spyOn(router, 'navigate').and.callThrough();
        component.navigateToTitle(new TOCItemMock('123'));
        expect(router.navigate).toHaveBeenCalled();
    });
    it('should scroll for navigateToTitle', () => {
        spyOn(router, 'navigate').and.callThrough();
        component.currentFragment = '123';
        component.navigateToTitle(new TOCItemMock('123'));
        expect(router.navigate).not.toHaveBeenCalled();
    });
    it('should _scrollToFragment', () => {
        const foundElementMock = {
            scrollIntoView: () => {},
        };
        spyOn(document, 'getElementById').and.returnValue(foundElementMock as HTMLElement);
        spyOn(foundElementMock, 'scrollIntoView');
        component._scrollToFragment('test');
        expect(foundElementMock.scrollIntoView).toHaveBeenCalled();
    });
    it('should scroll after timeout', fakeAsync(() => {
        spyOn(component, '_scrollToFragment').and.callThrough();
        component.ngAfterViewInit();
        tick(500);
        expect(component._scrollToFragment).toHaveBeenCalled();
    }));
});
