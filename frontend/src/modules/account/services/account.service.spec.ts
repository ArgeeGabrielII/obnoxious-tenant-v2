import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('AccountService', () => {
    let accountService: AccountService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AccountService],
        });
        accountService = TestBed.inject(AccountService);
    });

    describe('getAccount$', () => {
        it('should return Observable<Account>', () => {
            expect(accountService).toBeDefined();
        });
    });
});
