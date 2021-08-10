import { Injectable } from '@angular/core';
import { SelectedDateRange } from '@common/models';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import {
    endOfDay,
    endOfMonth,
    endOfYear,
    startOfDay,
    startOfMonth,
    startOfYear,
    sub,
} from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class DateRangeService {
    _endDate$ = new BehaviorSubject<Date>(endOfDay(new Date()));
    _startDate$ = new BehaviorSubject<Date>(startOfDay(new Date()));
    _selectedRange$ = new BehaviorSubject<SelectedDateRange>('CUSTOM');

    constructor() {}

    get endDate$() {
        return this._endDate$.pipe(distinctUntilChanged((a, b) => a.getTime() === b.getTime()));
    }
    get startDate$() {
        return this._startDate$.pipe(distinctUntilChanged((a, b) => a.getTime() === b.getTime()));
    }
    get selectedRange$() {
        return this._selectedRange$.pipe(distinctUntilChanged());
    }

    setCustom(fromDate: NgbDate, toDate: NgbDate) {
        this._endDate$.next(new Date(`${toDate.month}/${toDate.day}/${toDate.year}`));
        this._startDate$.next(new Date(`${fromDate.month}/${fromDate.day}/${fromDate.year}`));
    }

    setRange(range: SelectedDateRange) {
        switch (range) {
            case 'TODAY':
                this._endDate$.next(endOfDay(new Date()));
                this._startDate$.next(startOfDay(new Date()));
                break;
            case 'YESTERDAY':
                this._endDate$.next(
                    endOfDay(
                        sub(new Date(), {
                            days: 1,
                        })
                    )
                );
                this._startDate$.next(
                    startOfDay(
                        sub(new Date(), {
                            days: 1,
                        })
                    )
                );
                break;
            case 'LAST_7_DAYS':
                this._endDate$.next(endOfDay(new Date()));
                this._startDate$.next(
                    startOfDay(
                        sub(new Date(), {
                            days: 7,
                        })
                    )
                );
                break;
            case 'LAST_30_DAYS':
                this._endDate$.next(endOfDay(new Date()));
                this._startDate$.next(
                    startOfDay(
                        sub(new Date(), {
                            days: 30,
                        })
                    )
                );
                break;
            case 'THIS_MONTH':
                this._endDate$.next(endOfMonth(new Date()));
                this._startDate$.next(startOfMonth(new Date()));
                break;
            case 'LAST_MONTH':
                this._endDate$.next(
                    endOfMonth(
                        sub(new Date(), {
                            months: 1,
                        })
                    )
                );
                this._startDate$.next(
                    startOfMonth(
                        sub(new Date(), {
                            months: 1,
                        })
                    )
                );
                break;
            case 'THIS_YEAR':
                this._endDate$.next(endOfYear(new Date()));
                this._startDate$.next(startOfYear(new Date()));
                break;
            case 'LAST_YEAR':
                this._endDate$.next(
                    endOfYear(
                        sub(new Date(), {
                            years: 1,
                        })
                    )
                );
                this._startDate$.next(
                    startOfYear(
                        sub(new Date(), {
                            years: 1,
                        })
                    )
                );
                break;
            case 'CUSTOM':
                break;
        }
        this._selectedRange$.next(range);
    }
}
