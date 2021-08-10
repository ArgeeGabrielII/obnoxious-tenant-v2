import { UserService } from '@modules/auth/services';
import { MockUser, User } from '@testing/mocks';
import { Observable, of, ReplaySubject } from 'rxjs';

const mockUser = new MockUser();
const _user$ = new ReplaySubject<User>(1);

export class UserServiceStub implements UserService {
    constructor() {
        _user$.next(mockUser);
    }
    set user(user: User) {}
    get user$(): Observable<User> {
        return _user$;
    }
}
