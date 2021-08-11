import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TenantService {
    constructor() {}

    getTenant$(): Observable<{}> {
        return of({});
    }

}
