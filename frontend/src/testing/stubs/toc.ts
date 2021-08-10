import { TOCItem } from '@modules/toc/models';
import { TocService } from '@modules/toc/services';
import { Subject } from 'rxjs';

const _tocListener$ = new Subject<TOCItem>();

export const TocServiceStub: Partial<TocService> = {
    tocListener$: _tocListener$,
};
