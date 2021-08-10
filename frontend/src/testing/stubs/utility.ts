import { CopyToClipboardOptions } from '@common/models';
import { UtilityService } from '@common/services';
import { of } from 'rxjs';

export class UtilityServiceStub implements Partial<UtilityService> {
    _window = window;
    version$ = of('VERSION');
    get window() {
        return this._window;
    }
    getStoredObject = <T>(objectName: string) => ({} as T);
    storeObject = (objectName: string, objectToStore: {}) => {};
    copyToClipboard = (text: string, options?: CopyToClipboardOptions) => {};
}
