import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { ActivitiesService } from './activities.service';

describe('ActivitiesService', () => {
    let activitiesService: ActivitiesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ActivitiesService, DecimalPipe],
        });
        activitiesService = TestBed.inject(ActivitiesService);
    });

    it('should get activities$', () => {
        activitiesService.activities$.subscribe((response) => {
            expect(response).toBeDefined();
        });
    });
    it('should get total$', () => {
        activitiesService.total$.subscribe((response) => {
            expect(response).toBeDefined();
        });
    });
    it('should get loading$', () => {
        activitiesService.loading$.subscribe((response) => {
            expect(response).toBeDefined();
        });
    });
    it('should set page', () => {
        activitiesService.page = 3;
        expect(activitiesService.page).toBe(3);
    });
    it('should set pageSize', () => {
        activitiesService.pageSize = 3;
        expect(activitiesService.pageSize).toBe(3);
    });
    it('should set SearchTerm', () => {
        activitiesService.searchTerm = 'TEST';
        expect(activitiesService.searchTerm).toBe('TEST');
    });
    it('should sort ascending', (done) => {
        activitiesService.sortColumn = 'date';
        activitiesService.sortDirection = 'asc';
        activitiesService.activities$.subscribe((activities) => {
            if (activities.length === 0) {
                return;
            }
            expect(activities[0].date).toBe('01/10/20');
            done();
        });
    });
    it('should sort descending', (done) => {
        activitiesService.sortColumn = 'time';
        activitiesService.sortDirection = 'desc';
        activitiesService.activities$.subscribe((activities) => {
            if (activities.length === 0) {
                return;
            }
            expect(activities[0].time).toBe('5:45 AM');
            done();
        });
    });
});
