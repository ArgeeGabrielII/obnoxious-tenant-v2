import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CopyToClipboard, CopyToClipboardOptions } from '@common/models';
import copyToClipboard from 'copy-to-clipboard';
import { Observable } from 'rxjs';

@Injectable()
export class UtilityService {
    _window: Window;
    parse: JSON['parse'];
    stringify: JSON['stringify'];
    localStorage: Storage;
    _copyToClipboard: CopyToClipboard;

    constructor(private http: HttpClient) {
        this._window = window;
        this.parse = JSON.parse;
        this.stringify = JSON.stringify;
        this.localStorage = localStorage;
        this._copyToClipboard = copyToClipboard;
    }

    get window(): Window {
        return this._window;
    }
    get version$(): Observable<string> {
        return this.http.get('/assets/version', { responseType: 'text' });
    }

    getStoredObject<T>(objectName: string): T | undefined {
        const objectString = this.localStorage.getItem(objectName);
        if (!objectString) {
            return undefined;
        }
        return this.parse(objectString) as T;
    }

    storeObject(objectName: string, objectToStore: {}): void {
        this.localStorage.setItem(objectName, this.stringify(objectToStore));
    }

    copyToClipboard(text: string, options?: CopyToClipboardOptions) {
        this._copyToClipboard(text, options);
    }
}
