import { TestBed } from '@angular/core/testing';

import { AlertsGuard } from './alerts.guard';

describe('Alerts Guards', () => {
    let alertsGuard: AlertsGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AlertsGuard],
        });
        alertsGuard = TestBed.inject(AlertsGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            alertsGuard.canActivate().subscribe((response) => {
                expect(response).toEqual(true);
            });
        });
    });
});
