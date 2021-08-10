import { TestBed } from '@angular/core/testing';

import { MessagesService } from './messages.service';

describe('MessagesService', () => {
    let messagesService: MessagesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MessagesService],
        });
        messagesService = TestBed.inject(MessagesService);
    });

    describe('getMessages$', () => {
        it('should return Observable<Messages>', () => {
            messagesService.messages$.subscribe((response) => {
                expect(response).toBeDefined();
            });
        });
    });
});
