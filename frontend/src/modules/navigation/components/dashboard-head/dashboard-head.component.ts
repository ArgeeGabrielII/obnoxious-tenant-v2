import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-head',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-head.component.html',
    styleUrls: ['dashboard-head.component.scss'],
})
export class DashboardHeadComponent implements OnInit {
    @Input() icon!: string;
    @Input() title!: string;
    @Input() description!: string;
    @Input() breadcrumbs = false;
    @Input() simplified = false;
    @Input() light = false;
    @Input() showDateRange!: false;
    @Input() showSearch!: false;

    darkClasses = ['page-header-dark', 'bg-gradient-primary-to-secondary'];
    lightClasses = ['page-header-light', 'bg-white', 'shadow'];

    constructor() {}
    ngOnInit() {}
}
