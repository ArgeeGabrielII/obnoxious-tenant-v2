import { TestBed } from '@angular/core/testing';

import { ShopGuard } from './shop.guard';

describe('Shop Guards', () => {
    let shopGuard: ShopGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [ShopGuard],
        });
        shopGuard = TestBed.inject(ShopGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            shopGuard.canActivate().subscribe((response) => {
                expect(response).toEqual(true);
            });
        });
    });
});
