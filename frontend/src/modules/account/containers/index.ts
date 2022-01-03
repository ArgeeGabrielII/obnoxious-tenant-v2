import { FilesComponent } from './files/files.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';
import { AdministratorComponent } from './administrator/administrator.component';

export const containers = [
    ProfileComponent,
    FilesComponent,
    SecurityComponent,
    NotificationsComponent,
    AdministratorComponent,
];

export * from './profile/profile.component';
export * from './files/files.component';
export * from './security/security.component';
export * from './notifications/notifications.component';
export * from './administrator/administrator.component';
