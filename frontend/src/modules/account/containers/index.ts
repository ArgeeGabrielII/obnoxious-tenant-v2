import { BillingComponent } from './billing/billing.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { SecurityComponent } from './security/security.component';

export const containers = [
    ProfileComponent,
    BillingComponent,
    SecurityComponent,
    NotificationsComponent,
];

export * from './profile/profile.component';
export * from './billing/billing.component';
export * from './security/security.component';
export * from './notifications/notifications.component';
