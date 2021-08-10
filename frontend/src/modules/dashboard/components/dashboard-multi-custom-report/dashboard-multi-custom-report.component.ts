import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-multi-custom-report',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-multi-custom-report.component.html',
    styleUrls: ['dashboard-multi-custom-report.component.scss'],
})
export class DashboardMultiCustomReportComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
