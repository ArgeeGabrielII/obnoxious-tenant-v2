import { TestBed } from '@angular/core/testing';

import { TocGuard } from './toc.guard';

describe('Toc Guards', () => {
    let tocGuard: TocGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [TocGuard],
        });
        tocGuard = TestBed.inject(TocGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            tocGuard.canActivate().subscribe((response) => {
                expect(response).toEqual(true);
            });
        });
    });
});
