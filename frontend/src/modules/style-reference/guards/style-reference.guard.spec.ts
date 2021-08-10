import { TestBed } from '@angular/core/testing';

import { StyleReferenceGuard } from './style-reference.guard';

describe('Style Reference Guards', () => {
    let styleReferenceGuard: StyleReferenceGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [StyleReferenceGuard],
        });
        styleReferenceGuard = TestBed.inject(StyleReferenceGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            styleReferenceGuard.canActivate().subscribe((response) => {
                expect(response).toEqual(true);
            });
        });
    });
});
