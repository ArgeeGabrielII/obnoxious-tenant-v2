import { Injectable } from '@angular/core';
import { UtilityService } from '@modules/app-common/services';
import { Subject } from 'rxjs';

const _expand$ = new Subject<string[]>();

export interface ExpandedTable {
    [index: string]: boolean;
}

const EXPANDED_TABLE_CACHE_NAME = 'sbpro-expanded-table';

@Injectable()
export class SideNavService {
    expandedTable: ExpandedTable = {};

    constructor(private utilityService: UtilityService) {
        const cachedExpandedTable = this.utilityService.getStoredObject<ExpandedTable>(
            EXPANDED_TABLE_CACHE_NAME
        );
        if (cachedExpandedTable) {
            this.expandedTable = cachedExpandedTable;
        }
    }

    get expand$() {
        return _expand$;
    }

    isExpanded(hash: string): boolean {
        if (this.expandedTable[hash]) {
            return true;
        }
        return false;
    }

    setExpanded(hash: string, expanded: boolean) {
        this.expandedTable[hash] = expanded;
    }

    setDefault(hierarchyExtension: string[]) {
        if (
            Object.keys(this.expandedTable).length === 0 &&
            this.expandedTable.constructor === Object
        ) {
            this.saveCache(hierarchyExtension, '/dashboard');
        }
    }

    saveCache(hierarchyExtension: string[], link: string) {
        if (!link.match(/^\/dashboard/)) {
            return;
        }
        this.expandedTable = {};
        hierarchyExtension.forEach((id) => (this.expandedTable[id] = true));
        this.utilityService.storeObject(EXPANDED_TABLE_CACHE_NAME, this.expandedTable);
    }
}
