import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboards'],
    },
    {
        text: 'APP VIEWS',
        items: ['pages', 'flows'],
    },
    {
        text: 'UI TOOLKIT',
        items: ['layout', 'components', 'utilities'],
    },
    {
        text: 'PLUGINS',
        items: ['charts', 'tables'],
    },
];

export const sideNavItems: SideNavItems = {
    charts: {
        icon: 'bar-chart',
        link: '/charts',
        text: 'Charts',
    },
    components: {
        icon: 'package',
        submenu: [
            {
                link: '/dashboard/components/alerts',
                text: 'Alerts',
            },
            {
                link: '/dashboard/components/avatars',
                text: 'Avatars',
            },
            {
                link: '/dashboard/components/badges',
                text: 'Badges',
            },
            {
                link: '/dashboard/components/buttons',
                text: 'Buttons',
            },
            {
                link: '/dashboard/components/cards',
                text: 'Cards',
            },
            {
                link: '/dashboard/components/dropdowns',
                text: 'Dropdowns',
            },
            {
                link: '/dashboard/components/forms',
                text: 'Forms',
            },
            {
                link: '/dashboard/components/modal',
                text: 'Modals',
            },
            {
                link: '/dashboard/components/navigation',
                text: 'Navigation',
            },
            {
                link: '/dashboard/components/progress',
                text: 'Progress',
            },
            {
                link: '/dashboard/components/toasts',
                text: 'Toasts',
            },
            {
                link: '/dashboard/components/step',
                text: 'Step',
            },
            {
                link: '/dashboard/components/timeline',
                text: 'Timeline',
            },
            {
                link: '/dashboard/components/tooltips',
                text: 'Tooltips',
            },
        ],
        text: 'Components',
    },
    dashboards: {
        icon: 'activity',
        submenu: [
            {
                link: '/dashboard',
                text: 'Default',
                updated: true,
            },
            {
                link: '/dashboard/multipurpose',
                text: 'Multipurpose',
                updated: true,
            },
            {
                link: '/dashboard/affiliate',
                text: 'Affiliate',
                updated: true,
            },
        ],
        text: 'Dashboards',
    },
    flows: {
        icon: 'repeat',
        submenu: [
            {
                link: '/auth/multi-tenant-select',
                text: 'Multi-Tenant Registration',
            },
            {
                link: '/dashboard/auth/wizard',
                text: 'Wizard',
            },
        ],
        text: 'Flows',
    },
    layout: {
        icon: 'layout',
        submenu: [
            {
                submenu: [
                    {
                        link: '/dashboard/static',
                        text: 'Static Navigation',
                    },
                    {
                        link: '/dashboard/dark',
                        text: 'Dark Sidenav',
                    },
                    {
                        link: '/dashboard/rtl',
                        text: 'RTL Layout',
                    },
                ],
                text: 'Navigation',
            },
            {
                submenu: [
                    {
                        link: '/dashboard/pages/layout-boxed',
                        text: 'Boxed Layout',
                    },
                    {
                        link: '/dashboard/pages/layout-fluid',
                        text: 'Fluid Layout',
                    },
                ],
                text: 'Container Options',
            },
            {
                submenu: [
                    {
                        link: '/dashboard/page-headers/simplified',
                        text: 'Simplified',
                    },
                    {
                        link: '/dashboard/page-headers/compact',
                        text: 'Compact',
                    },
                    {
                        link: '/dashboard/page-headers/content-overlap',
                        text: 'Content Overlap',
                    },
                    {
                        link: '/dashboard/page-headers/breadcrumbs',
                        text: 'Breadcrumbs',
                    },
                    {
                        link: '/dashboard/page-headers/light',
                        text: 'Light',
                    },
                ],
                text: 'Page Headers',
            },
            {
                submenu: [
                    {
                        link: '/dashboard/pages/blank',
                        text: 'Default',
                    },
                    {
                        link: '/dashboard/pages/starter-minimal',
                        text: 'Minimal',
                    },
                ],
                text: 'Starter Layouts',
            },
        ],
        text: 'Layout',
    },
    pages: {
        icon: 'grid',
        submenu: [
            {
                submenu: [
                    {
                        link: '/dashboard/account/profile',
                        text: 'Profile',
                    },
                    {
                        link: '/dashboard/account/billing',
                        text: 'Billing',
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
            {
                submenu: [
                    {
                        submenu: [
                            {
                                link: '/auth/login',
                                text: 'Login',
                            },
                            {
                                link: '/auth/register',
                                text: 'Register',
                            },
                            {
                                link: '/auth/forgot-password',
                                text: 'Forgot Password',
                            },
                        ],
                        text: 'Basic',
                    },
                    {
                        submenu: [
                            {
                                link: '/auth/login-social',
                                text: 'Login',
                            },
                            {
                                link: '/auth/register-social',
                                text: 'Register',
                            },
                            {
                                link: '/auth/forgot-password-social',
                                text: 'Forgot Password',
                            },
                        ],
                        text: 'Social',
                    },
                ],
                text: 'Authentication',
            },
            {
                submenu: [
                    {
                        link: '/error/400',
                        text: '400 Error',
                    },
                    {
                        link: '/error/401',
                        text: '401 Error',
                    },
                    {
                        link: '/error/403',
                        text: '403 Error',
                    },
                    {
                        link: '/error/404-1',
                        text: '404 Error 1',
                    },
                    {
                        link: '/error/404-2',
                        text: '404 Error 2',
                    },
                    {
                        link: '/error/500',
                        text: '500 Page',
                    },
                    {
                        link: '/error/503',
                        text: '503 Page',
                    },
                    {
                        link: '/error/504',
                        text: '504 Page',
                    },
                ],
                text: 'Error',
            },
            {
                submenu: [
                    {
                        link: '/dashboard/knowledge-base/home-1',
                        text: 'Home 1',
                    },
                    {
                        link: '/dashboard/knowledge-base/home-2',
                        text: 'Home 2',
                    },
                    {
                        link: '/dashboard/knowledge-base/category',
                        text: 'Category',
                    },
                    {
                        link: '/dashboard/knowledge-base/article',
                        text: 'Article',
                    },
                ],
                text: 'Knowledge Base',
            },
            {
                link: '/dashboard/shop/pricing',
                text: 'Pricing',
            },
            {
                link: '/dashboard/shop/invoice',
                text: 'Invoice',
            },
        ],
        text: 'Pages',
    },
    tables: {
        icon: 'filter',
        link: '/tables',
        text: 'Tables',
    },
    utilities: {
        icon: 'tool',
        submenu: [
            {
                link: '/dashboard/utilities/animations',
                text: 'Animations',
            },
            {
                link: '/dashboard/utilities/background',
                text: 'Background',
            },
            {
                link: '/dashboard/utilities/borders',
                text: 'Borders',
            },
            {
                link: '/dashboard/utilities/lift',
                text: 'Lift',
            },
            {
                link: '/dashboard/utilities/shadows',
                text: 'Shadows',
            },
            {
                link: '/dashboard/utilities/typography',
                text: 'Typography',
            },
        ],
        text: 'Utilities',
    },
};
