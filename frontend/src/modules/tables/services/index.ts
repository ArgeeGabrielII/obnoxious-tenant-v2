import { ActivitiesService } from './activities.service';
import { CountryService } from './country.service';
import { TablesService } from './tables.service';
import { FileUploadTableService } from './file-upload-table.service';

export const services = [TablesService, CountryService, ActivitiesService, FileUploadTableService];

export * from './tables.service';
export * from './country.service';
export * from './activities.service';
export * from './file-upload-table.service';
