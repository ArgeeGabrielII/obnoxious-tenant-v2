import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts.component.html',
    styleUrls: ['charts.component.scss'],
})
export class ChartsComponent implements OnInit {
    areaChartDuration = 'yearly';
    barChartDuration = 'yearly';
    constructor(private changeDetectorRef: ChangeDetectorRef) {}
    ngOnInit() {}
    changeAreaChartRange(range: 'monthly' | 'quarterly' | 'yearly') {
        this.areaChartDuration = range;
        this.changeDetectorRef.detectChanges();
    }
    changeBarChartRange(range: 'monthly' | 'quarterly' | 'yearly') {
        this.barChartDuration = range;
        this.changeDetectorRef.detectChanges();
    }
}
