import { TestBed } from '@angular/core/testing';
import { MockUser, User } from '@testing/mocks';
import { UserServiceStub } from '@testing/stubs';

import { UserService } from './user.service';

const mockUser = new MockUser();

describe('UserService', () => {
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: UserService, useValue: new UserServiceStub() }],
        });
        userService = TestBed.inject(UserService);
    });

    describe('getUser$', () => {
        it('should return Observable<User>', () => {
            userService.user$.subscribe((response) => {
                expect(response).toEqual(mockUser);
            });
        });
    });
});
