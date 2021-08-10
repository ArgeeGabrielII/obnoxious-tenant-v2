import { TestBed } from '@angular/core/testing';

import { StyleReferenceService } from './style-reference.service';

describe('StyleReferenceService', () => {
    let styleReferenceService: StyleReferenceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StyleReferenceService],
        });
        styleReferenceService = TestBed.inject(StyleReferenceService);
    });

    describe('getStyleReference$', () => {
        it('should return Observable<StyleReference>', () => {
            styleReferenceService.getStyleReference$().subscribe((response) => {
                expect(response).toEqual({});
            });
        });
    });
});
