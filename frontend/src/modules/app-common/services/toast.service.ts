import { Injectable } from '@angular/core';
import { ToastMessage, ToastMessageData, ToastMessageOptions } from '@common/models';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ToastService {
    constructor() {}

    toasts: ToastMessage[] = [];

    show(header: ToastMessageData, body: ToastMessageData, options: ToastMessageOptions) {
        this.toasts.push({ header, body, uuid: uuid(), options });
    }

    remove(toastID: string) {
        this.toasts = this.toasts.filter((toast) => toast.uuid !== toastID);
    }
}
