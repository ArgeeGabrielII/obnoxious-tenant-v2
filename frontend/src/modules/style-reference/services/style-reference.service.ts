import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class StyleReferenceService {
    constructor() {}

    getStyleReference$(): Observable<{}> {
        return of({});
    }
}
