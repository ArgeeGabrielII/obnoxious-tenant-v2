/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ShopModule } from './shop.module';

/* Containers */
import * as shopContainers from './containers';

/* Guards */
import * as shopGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: shopContainers.ShopComponent,
    // },
];

@NgModule({
    imports: [ShopModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ShopRoutingModule {}
