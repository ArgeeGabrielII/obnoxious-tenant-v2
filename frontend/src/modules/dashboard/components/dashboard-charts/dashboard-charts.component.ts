import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-charts.component.html',
    styleUrls: ['dashboard-charts.component.scss'],
})
export class DashboardChartsComponent implements OnInit {
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
