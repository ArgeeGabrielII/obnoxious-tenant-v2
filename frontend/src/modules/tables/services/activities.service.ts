import { DecimalPipe } from '@angular/common';
import { Injectable, PipeTransform } from '@angular/core';
import { ACTIVITIES } from '@modules/tables/data/activities';
import { SortDirection } from '@modules/tables/directives';
import { Activity } from '@modules/tables/models';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

interface SearchResult {
    activities: Activity[];
    total: number;
}

interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: string;
    sortDirection: SortDirection;
}

function compare(v1: number | string, v2: number | string) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(activities: Activity[], column: string, direction: string): Activity[] {
    if (direction === '') {
        return activities;
    } else {
        return [...activities].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}

function matches(activity: Activity, term: string, pipe: PipeTransform) {
    return (
        activity.date.toLowerCase().includes(term.toLowerCase()) ||
        activity.eventText.toLowerCase().includes(term.toLowerCase()) ||
        activity.time.toLowerCase().includes(term.toLowerCase())
    );
}

@Injectable({ providedIn: 'root' })
export class ActivitiesService {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _activities$ = new BehaviorSubject<Activity[]>([]);
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
                this._activities$.next(result.activities);
                this._total$.next(result.total);
            });

        this._search$.next();
    }

    get activities$() {
        return this._activities$.asObservable();
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
        let activities = sort(ACTIVITIES, sortColumn, sortDirection);

        // 2. filter
        activities = activities.filter((activity) => matches(activity, searchTerm, this.pipe));
        const total = activities.length;

        // 3. paginate
        activities = activities.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return of({ activities, total });
    }
}
