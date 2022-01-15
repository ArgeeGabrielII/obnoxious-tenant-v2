import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { MultiTenantAddUsersComponent } from './multi-tenant-add-users/multi-tenant-add-users.component';
import { MultiTenantSelectComponent } from './multi-tenant-select/multi-tenant-select.component';
import { OrgCreateComponent } from './org-create/org-create.component';
import { OrgJoinComponent } from './org-join/org-join.component';
import { RegisterComponent } from './register/register.component';

export const containers = [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    MultiTenantSelectComponent,
    OrgCreateComponent,
    OrgJoinComponent,
    MultiTenantAddUsersComponent,
];

export * from './login/login.component';
export * from './register/register.component';
export * from './forgot-password/forgot-password.component';
export * from './multi-tenant-select/multi-tenant-select.component';
export * from './org-create/org-create.component';
export * from './org-join/org-join.component';
export * from './multi-tenant-add-users/multi-tenant-add-users.component';
