import { TestBed } from '@angular/core/testing';

import { ShopService } from './shop.service';

describe('ShopService', () => {
    let shopService: ShopService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ShopService],
        });
        shopService = TestBed.inject(ShopService);
    });

    describe('getShop$', () => {
        it('should return Observable<Shop>', () => {
            expect(shopService).toBeDefined();
        });
    });
});
