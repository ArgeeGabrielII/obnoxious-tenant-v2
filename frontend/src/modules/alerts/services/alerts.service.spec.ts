import { TestBed } from '@angular/core/testing';

import { AlertsService } from './alerts.service';

describe('AlertsService', () => {
    let alertsService: AlertsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AlertsService],
        });
        alertsService = TestBed.inject(AlertsService);
    });

    describe('getAlerts$', () => {
        it('should return Observable<Alerts>', () => {
            alertsService.alerts$.subscribe((response) => {
                expect(response).toBeDefined();
            });
        });
    });
});
