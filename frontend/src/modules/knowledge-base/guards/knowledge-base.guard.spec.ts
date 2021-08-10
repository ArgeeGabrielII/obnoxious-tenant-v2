import { TestBed } from '@angular/core/testing';

import { KnowledgeBaseGuard } from './knowledge-base.guard';

describe('KnowledgeBase Guards', () => {
    let knowledgeBaseGuard: KnowledgeBaseGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [KnowledgeBaseGuard],
        });
        knowledgeBaseGuard = TestBed.inject(KnowledgeBaseGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            knowledgeBaseGuard.canActivate().subscribe((response) => {
                expect(response).toEqual(true);
            });
        });
    });
});
