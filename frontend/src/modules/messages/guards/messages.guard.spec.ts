import { TestBed } from '@angular/core/testing';

import { MessagesGuard } from './messages.guard';

describe('Messages Guards', () => {
    let messagesGuard: MessagesGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [MessagesGuard],
        });
        messagesGuard = TestBed.inject(MessagesGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            messagesGuard.canActivate().subscribe((response) => {
                expect(response).toEqual(true);
            });
        });
    });
});
