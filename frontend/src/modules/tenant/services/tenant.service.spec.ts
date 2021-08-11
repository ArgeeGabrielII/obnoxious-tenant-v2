import { TestBed } from '@angular/core/testing';

import { TenantService } from './tenant.service';

describe('TenantService', () => {
    let tenantService: TenantService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TenantService],
        });
        tenantService = TestBed.inject(TenantService);
    });

    describe('getTenant$', () => {
        it('should return Observable<Tenant>', () => {
            expect(tenantService).toBeDefined();
        });
    });
});
