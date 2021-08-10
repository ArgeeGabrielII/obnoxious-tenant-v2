import { Injectable } from '@angular/core';
import { TOCItem } from '@modules/toc/models';
import { Subject } from 'rxjs';

const _tocListener$ = new Subject<TOCItem>();

@Injectable()
export class TocService {
    constructor() {}

    get tocListener$() {
        return _tocListener$;
    }
}
