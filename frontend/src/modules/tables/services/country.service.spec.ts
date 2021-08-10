import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';

describe('CountryService', () => {
    let countryService: CountryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CountryService, DecimalPipe],
        });
        countryService = TestBed.inject(CountryService);
    });

    it('should get countries$', () => {
        countryService.countries$.subscribe((response) => {
            expect(response).toBeDefined();
        });
    });
    it('should get total$', () => {
        countryService.total$.subscribe((response) => {
            expect(response).toBeDefined();
        });
    });
    it('should get loading$', () => {
        countryService.loading$.subscribe((response) => {
            expect(response).toBeDefined();
        });
    });
    it('should set page', () => {
        countryService.page = 3;
        expect(countryService.page).toBe(3);
    });
    it('should set pageSize', () => {
        countryService.pageSize = 3;
        expect(countryService.pageSize).toBe(3);
    });
    it('should set SearchTerm', () => {
        countryService.searchTerm = 'TEST';
        expect(countryService.searchTerm).toBe('TEST');
    });
    it('should search for United Stated', (done) => {
        countryService.searchTerm = 'United States';
        countryService.countries$.subscribe((countries) => {
            if (countries.length === 0) {
                return;
            }
            expect(countries[0].name).toBe('United States');
            done();
        });
    });
    it('should sort ascending', (done) => {
        countryService.sortColumn = 'name';
        countryService.sortDirection = 'asc';
        countryService.countries$.subscribe((countries) => {
            if (countries.length === 0) {
                return;
            }
            expect(countries[0].name).toBe('Brazil');
            done();
        });
    });
    it('should sort descending', (done) => {
        countryService.sortColumn = 'id';
        countryService.sortDirection = 'desc';
        countryService.countries$.subscribe((countries) => {
            if (countries.length === 0) {
                return;
            }
            expect(countries[0].name).toBe('China');
            done();
        });
    });
});
