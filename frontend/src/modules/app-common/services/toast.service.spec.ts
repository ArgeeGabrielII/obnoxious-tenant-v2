import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
    let toastService: ToastService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ToastService],
        });
        toastService = TestBed.inject(ToastService);
    });

    describe('show', () => {
        it('should add a toast to ToastMessage[]', () => {
            expect(toastService.toasts.length).toBe(0);
            toastService.show('test', 'test', {});
            expect(toastService.toasts.length).toBe(1);
            toastService.toasts = [];
        });
    });

    describe('remove', () => {
        it('should remove a toast from ToastMessage[]', () => {
            expect(toastService.toasts.length).toBe(0);
            toastService.show('test', 'test', {});
            expect(toastService.toasts.length).toBe(1);
            toastService.remove(toastService.toasts[0].uuid);
            expect(toastService.toasts.length).toBe(0);
        });
    });
});
