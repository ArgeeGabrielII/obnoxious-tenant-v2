import { TestBed } from '@angular/core/testing';

import { PrismService } from './prism.service';

describe('PrismService', () => {
    let prismService: PrismService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PrismService],
        });
        prismService = TestBed.inject(PrismService);
    });

    describe('highlightAll', () => {
        it('should call highlightAll', () => {
            spyOn(prismService.Prism, 'highlightAll').and.callThrough();
            prismService.highlightAll();
            expect(prismService.Prism.highlightAll).toHaveBeenCalled();
        });
    });
});
