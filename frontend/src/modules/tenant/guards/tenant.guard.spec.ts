import { TestBed } from '@angular/core/testing';

import { TenantGuard } from './tenant.guard';

describe('Tenant Guards', () => {
    let tenantGuard: TenantGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [TenantGuard],
        });
        tenantGuard = TestBed.inject(TenantGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            tenantGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
