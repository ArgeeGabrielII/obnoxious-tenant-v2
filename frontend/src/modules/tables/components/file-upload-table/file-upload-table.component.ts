import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { FileUpload } from '@modules/tables/models';
import { FileUploadTableService } from '@modules/tables/services';
import moment from 'moment-timezone';
import { Observable } from 'rxjs';

import { AccountService } from '../../../account/services/account.service';

@Component({
    selector: 'file-upload-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './file-upload-table.component.html',
    styleUrls: ['file-upload-table.component.scss'],
})
export class FileUploadTableComponent implements OnInit {
    @Input() pageSize = 8;

    profileData = JSON.parse(localStorage.getItem('_ld') || '');

    file_upload$!: Observable<FileUpload[]>;
    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;
    isVerified = false;

    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(
        public fileUploadService: FileUploadTableService,
        public changeDetectorRef: ChangeDetectorRef,
        public svcAccount: AccountService
    ) {}
    async ngOnInit() {
        this.fileUploadService.pageSize = this.pageSize;
        this.fileUploadService.idListData = await this.svcAccount.getIdentificationList(this.profileData.id);
        this.file_upload$ = this.fileUploadService.file_upload$;
        this.total$ = this.fileUploadService.total$;
        this.changeDetectorRef.detectChanges();
    }

    onSort({ column, direction }: SortEvent) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.fileUploadService.sortColumn = column;
        this.fileUploadService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }

    formatDate(date: string): string {
        return moment.tz(date, 'Asia/Manila').format('MMM DD, YYYY');
    }
}
