import { ForgotPasswordSocialComponent } from './forgot-password-social/forgot-password-social.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginSocialComponent } from './login-social/login-social.component';
import { LoginComponent } from './login/login.component';
import { MultiTenantAddUsersComponent } from './multi-tenant-add-users/multi-tenant-add-users.component';
import { MultiTenantSelectComponent } from './multi-tenant-select/multi-tenant-select.component';
import { OrgCreateComponent } from './org-create/org-create.component';
import { OrgJoinComponent } from './org-join/org-join.component';
import { RegisterSocialComponent } from './register-social/register-social.component';
import { RegisterComponent } from './register/register.component';
import { WizardComponent } from './wizard/wizard.component';

export const containers = [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LoginSocialComponent,
    RegisterSocialComponent,
    ForgotPasswordSocialComponent,
    MultiTenantSelectComponent,
    OrgCreateComponent,
    OrgJoinComponent,
    MultiTenantAddUsersComponent,
    WizardComponent,
];

export * from './login/login.component';
export * from './register/register.component';
export * from './forgot-password/forgot-password.component';
export * from './login-social/login-social.component';
export * from './register-social/register-social.component';
export * from './forgot-password-social/forgot-password-social.component';
export * from './multi-tenant-select/multi-tenant-select.component';
export * from './org-create/org-create.component';
export * from './org-join/org-join.component';
export * from './multi-tenant-add-users/multi-tenant-add-users.component';
export * from './wizard/wizard.component';
