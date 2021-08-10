import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';

import { UtilityService } from './utility.service';

describe('UtilityService', () => {
    let utilityService: UtilityService;

    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UtilityService],
        });
        utilityService = TestBed.inject(UtilityService);

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should return version', () => {
        utilityService.version$.pipe(take(1)).subscribe((response) => {
            expect(response).toEqual('a.b.c');
        });

        const req = httpTestingController.expectOne('/assets/version');
        expect(req.request.method).toEqual('GET');

        req.flush('a.b.c');
        httpTestingController.verify();
    });
    it('should return storedObject if it exists', () => {
        spyOn(utilityService, 'parse').and.callThrough();
        spyOn(utilityService.localStorage, 'getItem').and.returnValues(null, '{"test":"TEST"}');

        utilityService.getStoredObject('test');
        expect(utilityService.parse).not.toHaveBeenCalled();

        utilityService.getStoredObject('test');
        expect(utilityService.parse).toHaveBeenCalled();
    });
    it('should storeObject', () => {
        spyOn(utilityService.localStorage, 'setItem');
        utilityService.storeObject('test', { a: 1 });
        expect(utilityService.localStorage.setItem).toHaveBeenCalled();
    });
    it('should copyToClipboard', () => {
        spyOn(utilityService, '_copyToClipboard');
        utilityService.copyToClipboard('test');
        expect(utilityService._copyToClipboard).toHaveBeenCalled();
    });
    it('should return window', () => {
        expect(utilityService.window).toBeDefined();
    });
});
