import { TestBed } from '@angular/core/testing';
import { UtilityService } from '@common/services';
import { UtilityServiceStub } from '@testing/stubs';
import { Subject } from 'rxjs';

import { SideNavService } from './side-nav.service';

describe('SideNavService', () => {
    let sideNavService: SideNavService;
    let utilityService: UtilityService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SideNavService,
                { provide: UtilityService, useValue: new UtilityServiceStub() },
            ],
        });
        utilityService = TestBed.inject(UtilityService);
    });

    it('should return false if hash of side nav is not expanded', () => {
        sideNavService = TestBed.inject(SideNavService);
        expect(sideNavService.isExpanded('123')).toBeFalse();
    });

    it('should return true if hash of side nav is expanded', () => {
        sideNavService = TestBed.inject(SideNavService);
        sideNavService.setExpanded('123', true);
        expect(sideNavService.isExpanded('123')).toBeTrue();
        sideNavService.setExpanded('123', false);
    });
    it('should return the expand$ Subject', () => {
        sideNavService = TestBed.inject(SideNavService);
        const expandSubject = sideNavService.expand$;
        expect(expandSubject instanceof Subject).toBe(true);
    });
    it('should load cachedExpandedTable if it exists', () => {
        spyOn(utilityService, 'getStoredObject').and.returnValue({ 123: true });
        sideNavService = TestBed.inject(SideNavService);
        expect(sideNavService.isExpanded('123')).toBeTrue();
        sideNavService.setExpanded('123', false);
    });
    it('should NOT load cachedExpandedTable if it does NOT exists', () => {
        spyOn(utilityService, 'getStoredObject').and.returnValue(null);
        sideNavService = TestBed.inject(SideNavService);
        expect(sideNavService.isExpanded('123')).toBeFalse();
    });
    it('should setDefault', () => {
        sideNavService = TestBed.inject(SideNavService);
        sideNavService.expandedTable = {};
        spyOn(sideNavService, 'saveCache').and.callThrough();
        sideNavService.setDefault(['123']);
        expect(sideNavService.saveCache).toHaveBeenCalled();
    });
    it('should NOT setDefault', () => {
        sideNavService = TestBed.inject(SideNavService);
        sideNavService.expandedTable = { a: true };
        spyOn(sideNavService, 'saveCache').and.callThrough();
        sideNavService.setDefault(['123']);
        expect(sideNavService.saveCache).not.toHaveBeenCalled();
    });
    it('should only save cache for /dashboard routes', () => {
        spyOn(utilityService, 'storeObject').and.callThrough();
        sideNavService = TestBed.inject(SideNavService);
        sideNavService.saveCache(['a'], '/asd');
        expect(utilityService.storeObject).not.toHaveBeenCalled();
    });
});
