import { TestBed } from '@angular/core/testing';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    ChildActivationEnd,
    Router,
} from '@angular/router';
import { ActivatedRouteStub, RouterStub } from '@testing/stubs';
import { BehaviorSubject } from 'rxjs';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
    let navigationService: NavigationService;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NavigationService,
                { provide: ActivatedRoute, useValue: ActivatedRouteStub },
                { provide: Router, useValue: new RouterStub() },
            ],
        });
        navigationService = TestBed.inject(NavigationService);
        router = TestBed.inject(Router);
    });

    describe('sideNavVisible$', () => {
        it('should return Observable<boolean>', () => {
            navigationService.sideNavVisible$().subscribe((response) => {
                expect(response).toEqual(true);
            });
        });
    });
    it('should fire navigation subjects on ChildActivationEnd', () => {
        ((router as unknown) as RouterStub).events.next(
            new ChildActivationEnd(({
                firstChild: {
                    firstChild: null,
                    data: {
                        title: 'TEST',
                    },
                },
            } as unknown) as ActivatedRouteSnapshot)
        );

        expect(navigationService._routeData$.value).toEqual({
            title: 'TEST',
        });
        expect(navigationService._currentURL$.value).toBe('test');
    });
    it('should toggleSideNav', () => {
        navigationService.toggleSideNav();
        expect(navigationService._sideNavVisible$.value).toBe(false);
        navigationService.toggleSideNav(false);
        expect(navigationService._sideNavVisible$.value).toBe(false);
        navigationService.toggleSideNav();
        expect(navigationService._sideNavVisible$.value).toBe(true);
    });
    it('should return routeData$ Observable', () => {
        const routeDataObservable = navigationService.routeData$();
        expect(routeDataObservable instanceof BehaviorSubject).toBe(true);
    });
    it('should return currentURL$ Observable', () => {
        const currentURLObservable = navigationService.currentURL$();
        expect(currentURLObservable instanceof BehaviorSubject).toBe(true);
    });
});
