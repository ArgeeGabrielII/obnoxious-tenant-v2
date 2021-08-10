import { TestBed } from '@angular/core/testing';

import { AccountGuard } from './account.guard';

describe('Account Guards', () => {
    let accountGuard: AccountGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AccountGuard],
        });
        accountGuard = TestBed.inject(AccountGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            accountGuard.canActivate().subscribe((response) => {
                expect(response).toEqual(true);
            });
        });
    });
});
