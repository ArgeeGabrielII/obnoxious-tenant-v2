import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { FileUploadTableService } from './file-upload-table.service';

describe('FileUploadTableService', () => {
    let fileUploadTableService: FileUploadTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FileUploadTableService, DecimalPipe],
        });
        fileUploadTableService = TestBed.inject(FileUploadTableService);
    });

    it('should get file_upload$', () => {
        fileUploadTableService.file_upload$.subscribe((response) => {
            expect(response).toBeDefined();
        });
    });
    it('should get total$', () => {
        fileUploadTableService.total$.subscribe((response) => {
            expect(response).toBeDefined();
        });
    });
    it('should get loading$', () => {
        fileUploadTableService.loading$.subscribe((response) => {
            expect(response).toBeDefined();
        });
    });
    it('should set page', () => {
        fileUploadTableService.page = 3;
        expect(fileUploadTableService.page).toBe(3);
    });
    it('should set pageSize', () => {
        fileUploadTableService.pageSize = 3;
        expect(fileUploadTableService.pageSize).toBe(3);
    });
    it('should set SearchTerm', () => {
        fileUploadTableService.searchTerm = 'TEST';
        expect(fileUploadTableService.searchTerm).toBe('TEST');
    });
    it('should sort ascending', (done) => {
        fileUploadTableService.sortColumn = 'date';
        fileUploadTableService.sortDirection = 'asc';
        fileUploadTableService.file_upload$.subscribe((file_upload) => {
            if (file_upload.length === 0) {
                return;
            }
            expect(file_upload[0].date).toBe('01/10/20');
            done();
        });
    });
    it('should sort descending', (done) => {
        fileUploadTableService.sortColumn = 'time';
        fileUploadTableService.sortDirection = 'desc';
        fileUploadTableService.file_upload$.subscribe((file_upload) => {
            if (file_upload.length === 0) {
                return;
            }
            expect(file_upload[0].time).toBe('5:45 AM');
            done();
        });
    });
});
