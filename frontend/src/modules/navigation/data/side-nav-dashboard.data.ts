import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
    },
    {
        text: 'MANAGEMENT',
        items: ['tenant', 'account', 'registration'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'activity',
        link: '/dashboard',
        text: 'Dashboard',
    },
    tenant: {
        icon: 'user',
        submenu: [

        ],
        text: 'Tenant',
    },
    account: {
        icon: 'users',
        submenu: [
            {
                link: '/dashboard/account/profile',
                text: 'Profile',
            },
            {
                link: '/dashboard/account/files',
                text: 'Files',
            },
            {
                link: '/dashboard/account/security',
                text: 'Security',
            },
            {
                link: '/dashboard/account/notifications',
                text: 'Notifications',
            },
        ],
        text: 'Account',
    },
    registration: {
        icon: 'edit',
        submenu: [
            {
                link: '/auth/multi-tenant-select',
                text: 'Tenant Registration',
            },
        ],
        text: 'Registration',
    },
};
