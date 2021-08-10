import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TOCIndexItem } from '@modules/toc/models';

@Component({
    selector: 'sbpro-typography',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './typography.component.html',
    styleUrls: ['typography.component.scss'],
})
export class TypographyComponent implements OnInit {
    tocIndex: TOCIndexItem[] = [{ title: 'Color' }, { title: 'Grayscale' }, { title: 'Weight' }];
    constructor() {}
    ngOnInit() {}
}
