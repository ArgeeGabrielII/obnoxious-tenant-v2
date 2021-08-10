import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-dashboard-head-compact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-head-compact.component.html',
    styleUrls: ['dashboard-head-compact.component.scss'],
})
export class DashboardHeadCompactComponent implements OnInit {
    @Input() icon!: string;
    @Input() title!: string;
    @Input() light = true;

    darkClasses = ['page-header-dark', 'bg-gradient-primary-to-secondary'];
    lightClasses = ['page-header-light', 'bg-white', 'shadow'];

    constructor() {}
    ngOnInit() {}
}
