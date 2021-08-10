/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AccountModule } from './account.module';

/* Containers */
import * as accountContainers from './containers';

/* Guards */
import * as accountGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: accountContainers.AccountComponent,
    // },
];

@NgModule({
    imports: [AccountModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AccountRoutingModule {}
