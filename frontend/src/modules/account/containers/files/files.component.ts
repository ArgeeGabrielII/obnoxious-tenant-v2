import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sbpro-files',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './files.component.html',
    styleUrls: ['files.component.scss'],
})
export class FilesComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
