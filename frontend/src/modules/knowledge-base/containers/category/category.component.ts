import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-category',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './category.component.html',
    styleUrls: ['category.component.scss'],
})
export class CategoryComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
