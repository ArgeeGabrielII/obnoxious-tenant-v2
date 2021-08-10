import { TestBed } from '@angular/core/testing';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { DateRangeService } from './date-range.service';

describe('DateRangeService', () => {
    let dateRangeService: DateRangeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DateRangeService],
        });
        dateRangeService = TestBed.inject(DateRangeService);
    });

    describe('setRange', () => {
        it('should handle all cases', () => {
            dateRangeService.setRange('TODAY');
            dateRangeService.setRange('YESTERDAY');
            dateRangeService.setRange('LAST_7_DAYS');
            dateRangeService.setRange('LAST_30_DAYS');
            dateRangeService.setRange('THIS_MONTH');
            dateRangeService.setRange('LAST_MONTH');
            dateRangeService.setRange('THIS_YEAR');
            dateRangeService.setRange('LAST_YEAR');
            dateRangeService.setRange('CUSTOM');
        });
    });
    it('should get endDate$', async () => {
        dateRangeService.endDate$.subscribe((date) => {
            expect(date).toBeDefined();
        });
        dateRangeService._endDate$.next(new Date());
    });
    it('should get startDate$', async () => {
        dateRangeService.startDate$.subscribe((date) => {
            expect(date).toBeDefined();
        });
        dateRangeService._startDate$.next(new Date());
    });
    it('should get selectedRange$', async () => {
        dateRangeService.selectedRange$.subscribe((range) => {
            expect(range).toBeDefined();
        });
    });
    it('should setCustom', () => {
        const dateA: NgbDate = new NgbDate(2020, 2, 1);
        const dateB: NgbDate = new NgbDate(2020, 2, 3);
        dateRangeService.setCustom(dateA, dateB);
    });
});
