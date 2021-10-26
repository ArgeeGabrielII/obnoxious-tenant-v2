import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AccountService } from '../../services/account.service';
import { environment } from 'environments/environment';

@Component({
    selector: 'sbpro-files',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './files.component.html',
    styleUrls: ['files.component.scss'],
})
export class FilesComponent implements OnInit {
    @ViewChild('notificationModal') notificationModal!: TemplateRef<unknown>;

    document: any;
    selected_file_type: any = ''; // Set Default File Type
    file_type_list: any;

    notifMessage: string = '';

    profileData = JSON.parse(localStorage.getItem('_ld') || '');

    constructor(
        public svcUserAccount: AccountService,
        private modalService: NgbModal
    ) {}
    
    async ngOnInit() {
        console.log(this.profileData);
        await this.svcUserAccount.getMasterList();

        this.file_type_list = this.svcUserAccount.identification_list;
        if(!environment.production) { console.log(`Account > File > File Type List: ${JSON.stringify(this.file_type_list)}`); }
    }

    onFileSelect(event: any) {
        if(event.target.files.length > 0) {
            this.document = event.target.files[0];
        }
    }

    async imageSubmit() {
        if(!environment.production) { console.log(this.selected_file_type); }

        if(this.selected_file_type !== '') {
            if(!environment.production) { console.log(`File Submit`); }
            const fd = new FormData();
        
            fd.append('user_id', this.profileData.id);
            fd.append('file_type', 'documents');
            fd.append('filename', this.document);

            await this.svcUserAccount.updateDocuments(fd, this.profileData.id, this.selected_file_type);
        } else {
            this.notifMessage = 'Please select a file type.';
            this.modalService.open(this.notificationModal);
        }

        
    }
}
