import { ActivitiesService } from './activities.service';
import { CountryService } from './country.service';
import { TablesService } from './tables.service';

export const services = [TablesService, CountryService, ActivitiesService];

export * from './tables.service';
export * from './country.service';
export * from './activities.service';
