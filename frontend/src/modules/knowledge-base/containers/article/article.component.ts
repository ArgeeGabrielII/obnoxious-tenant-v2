import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-article',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article.component.html',
    styleUrls: ['article.component.scss'],
})
export class ArticleComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
