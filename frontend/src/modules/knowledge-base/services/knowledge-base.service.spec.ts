import { TestBed } from '@angular/core/testing';

import { KnowledgeBaseService } from './knowledge-base.service';

describe('KnowledgeBaseService', () => {
    let knowledgeBaseService: KnowledgeBaseService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [KnowledgeBaseService],
        });
        knowledgeBaseService = TestBed.inject(KnowledgeBaseService);
    });

    describe('getKnowledgeBase$', () => {
        it('should return Observable<KnowledgeBase>', () => {
            expect(knowledgeBaseService).toBeDefined();
        });
    });
});
