import { DecimalPipe } from '@angular/common';
import { Injectable, PipeTransform } from '@angular/core';
import { FILEDATA } from '@modules/tables/data/file-upload';
import { SortDirection } from '@modules/tables/directives';
import { FileUpload } from '@modules/tables/models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

interface SearchResult {
    file_upload: FileUpload[];
    total: number;
}

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: string;
    sortDirection: SortDirection;
}

function compare(v1: number | string, v2: number | string,) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(file_upload: FileUpload[], column: string, direction: string): FileUpload[] {
    if (direction === '') {
        return file_upload;
    } else {
        return [...file_upload].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}

function matches(file_upload: FileUpload, term: string, pipe: PipeTransform) {
    return (
        file_upload.identification_list_type.toLowerCase().includes(term.toLowerCase())
    );
}

@Injectable()
export class FileUploadTableService {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _file_upload$ = new BehaviorSubject<FileUpload[]>([]);
    private _total$ = new BehaviorSubject<number>(0);

    private _state: State = {
        page: 1,
        pageSize: 8,
        searchTerm: '',
        sortColumn: '',
        sortDirection: '',
    };

    constructor(private pipe: DecimalPipe) {
        this._search$
            .pipe(
                tap(() => this._loading$.next(true)),
                debounceTime(120),
                switchMap(() => this._search()),
                delay(120),
                tap(() => this._loading$.next(false))
            )
            .subscribe((result) => {
                this._file_upload$.next(result.file_upload);
                this._total$.next(result.total);
            });

        this._search$.next();
    }

    get file_upload$() {
        return this._file_upload$.asObservable();
    }
    get total$() {
        return this._total$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get page() {
        return this._state.page;
    }
    set page(page: number) {
        this._set({ page });
    }
    get pageSize() {
        return this._state.pageSize;
    }
    set pageSize(pageSize: number) {
        this._set({ pageSize });
    }
    get searchTerm() {
        return this._state.searchTerm;
    }
    set searchTerm(searchTerm: string) {
        this._set({ searchTerm });
    }
    set sortColumn(sortColumn: string) {
        this._set({ sortColumn });
    }
    set sortDirection(sortDirection: SortDirection) {
        this._set({ sortDirection });
    }

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private _search(): Observable<SearchResult> {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

        // 1. sort
        let file_upload = sort(FILEDATA, sortColumn, sortDirection);

        // 2. filter
        file_upload = file_upload.filter((filedata) => matches(filedata, searchTerm, this.pipe));
        const total = file_upload.length;

        // 3. paginate
        file_upload = file_upload.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return of({ file_upload, total });
    }
}
