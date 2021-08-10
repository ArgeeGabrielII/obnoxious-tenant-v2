import { TestBed } from '@angular/core/testing';

import { ChartsService } from './charts.service';

describe('ChartsService', () => {
    let chartsService: ChartsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ChartsService],
        });
        chartsService = TestBed.inject(ChartsService);
    });

    describe('Chart', () => {
        it('should return Chart', () => {
            expect(chartsService.Chart).toBeDefined();
        });
    });
});
