import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AccountService } from '../../services/account.service';
import { environment } from 'environments/environment';

@Component({
    selector: 'administrator',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './administrator.component.html',
    styleUrls: ['administrator.component.scss'],
})
export class AdministratorComponent implements OnInit {

    @ViewChild('confirmationModal') confirmationModal!: TemplateRef<unknown>;
    @ViewChild('notificationModal') notificationModal!: TemplateRef<unknown>;

    administratorData = JSON.parse(localStorage.getItem('_ld') || '');

    constructor(
        private fb: FormBuilder, 
        public svcUserAccount: AccountService, 
        private modalService: NgbModal) { }

    async ngOnInit() { }
}
