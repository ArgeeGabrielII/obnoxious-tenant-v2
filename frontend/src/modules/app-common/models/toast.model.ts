import { TemplateRef } from '@angular/core';

export interface ToastMessage {
    header: ToastMessageData;
    body: ToastMessageData;
    uuid: string;
    options?: ToastMessageOptions;
}

export type ToastMessageData = string | TemplateRef<unknown>;

export interface ToastMessageOptions {
    autohide?: boolean;
    delay?: number;
    classes?: string;
    headerClasses?: string;
    bodyClasses?: string;
}
