import { Component, OnInit } from '@angular/core';
import { ToastService } from '@common/services/toast.service';

@Component({
    selector: 'sbpro-toast-view',
    templateUrl: './toast-view.component.html',
    styleUrls: ['toast-view.component.scss'],
})
export class ToastViewComponent implements OnInit {
    constructor(public toastService: ToastService) {}
    ngOnInit() {}
}
