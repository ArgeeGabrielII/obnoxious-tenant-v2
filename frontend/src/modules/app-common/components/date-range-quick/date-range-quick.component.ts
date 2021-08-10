import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { SelectedDateRange } from '@common/models';
import { DateRangeService } from '@common/services';
import {
    NgbCalendar,
    NgbDate,
    NgbDateParserFormatter,
    Placement,
} from '@ng-bootstrap/ng-bootstrap';
import { combineLatest, Subscription } from 'rxjs';

import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
    selector: 'sbpro-date-range-quick',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './date-range-quick.component.html',
    styleUrls: ['date-range-quick.component.scss'],
})
export class DateRangeQuickComponent implements OnInit, OnDestroy {
    @ViewChild('calendarDropdown') calendarDropdown!: DropdownComponent;
    @Input() placement: Placement = 'bottom-end';

    endDate!: Date;
    startDate!: Date;
    selectedRange!: SelectedDateRange;

    hoveredDate: NgbDate | null = null;
    fromDate!: NgbDate | null;
    toDate!: NgbDate | null;

    subscription: Subscription = new Subscription();
    constructor(
        public dateRangeService: DateRangeService,
        private changeDetectorRef: ChangeDetectorRef,
        private calendar: NgbCalendar,
        public formatter: NgbDateParserFormatter
    ) {}
    ngOnInit() {
        this.subscription.add(
            combineLatest([
                this.dateRangeService.endDate$,
                this.dateRangeService.startDate$,
                this.dateRangeService.selectedRange$,
            ]).subscribe(([endDate, startDate, selectedRange]) => {
                this.endDate = endDate;
                this.startDate = startDate;
                this.selectedRange = selectedRange;
                this.fromDate = new NgbDate(
                    startDate.getFullYear(),
                    startDate.getMonth() + 1,
                    startDate.getDate()
                );
                this.toDate = new NgbDate(
                    endDate.getFullYear(),
                    endDate.getMonth() + 1,
                    endDate.getDate()
                );
                this.changeDetectorRef.detectChanges();
            })
        );
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    setRange(range: SelectedDateRange) {
        this.dateRangeService.setRange(range);
    }
    onDateSelection(date: NgbDate) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
            this.toDate = date;
            this.dateRangeService.setCustom(this.fromDate, this.toDate);
            this.calendarDropdown.close();
        } else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date: NgbDate) {
        return (
            this.fromDate &&
            !this.toDate &&
            this.hoveredDate &&
            date.after(this.fromDate) &&
            date.before(this.hoveredDate)
        );
    }
    isInside(date: NgbDate) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date: NgbDate) {
        return (
            date.equals(this.fromDate) ||
            (this.toDate && date.equals(this.toDate)) ||
            this.isInside(date) ||
            this.isHovered(date)
        );
    }
}
