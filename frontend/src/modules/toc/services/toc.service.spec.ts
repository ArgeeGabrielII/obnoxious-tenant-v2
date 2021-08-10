import { TestBed } from '@angular/core/testing';

import { TocService } from './toc.service';

describe('TocService', () => {
    let tocService: TocService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TocService],
        });
        tocService = TestBed.inject(TocService);
    });

    describe('tocListener$', () => {
        it('should return Subject<TOCItem>', () => {
            expect(tocService.tocListener$).toBeDefined();
        });
    });
});
