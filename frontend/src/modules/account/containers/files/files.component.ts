import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AccountService } from '../../services/account.service';

@Component({
    selector: 'sbpro-files',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './files.component.html',
    styleUrls: ['files.component.scss'],
})
export class FilesComponent implements OnInit {

    document: any;
    file_type_list: any;

    profileData = JSON.parse(localStorage.getItem('_ld') || '');

    constructor(
        public svcUserAccount: AccountService
    ) {}
    
    async ngOnInit() {
        await this.svcUserAccount.getMasterList();

        this.file_type_list = this.svcUserAccount.identification_list;
        console.log(JSON.stringify(this.file_type_list));
    }

    onFileSelect(event: any) {
        if(event.target.files.length > 0) {
            this.document = event.target.files[0];
        }
    }

    async imageSubmit() {
        const fd = new FormData();
        
        fd.append('user_id', this.profileData.id);
        fd.append('file_type', 'documents');
        fd.append('filename', this.document);

        await this.svcUserAccount.updateDocuments(fd, this.profileData.id, '');
    }
}
