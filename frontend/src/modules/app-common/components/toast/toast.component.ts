import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ToastService } from '@common/services/toast.service';

@Component({
    selector: 'sbpro-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['toast.component.scss'],
})
export class ToastComponent implements OnInit {
    constructor(public toastService: ToastService) {}
    @Input() header!: string | TemplateRef<unknown>;
    @Input() body!: string | TemplateRef<unknown>;
    @Input() autohide = false;
    @Input() delay!: number;
    @Input() classes!: string;
    @Input() headerClasses!: string;
    @Input() bodyClasses!: string;
    @Input() toastID!: string;

    headerIsTemplate!: boolean;
    bodyIsTemplate!: boolean;

    timeoutID!: number;

    toastContext = this;

    ngOnInit() {
        this.headerIsTemplate = this.header instanceof TemplateRef;
        this.bodyIsTemplate = this.body instanceof TemplateRef;
        if (this.autohide) {
            this.timeoutID = window.setTimeout(() => {
                this.toastService.remove(this.toastID);
            }, this.delay || 5000);
        }
    }
}
