/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { TocModule } from './toc.module';

/* Containers */
import * as tocContainers from './containers';

/* Guards */
import * as tocGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: tocContainers.TocComponent,
    // },
];

@NgModule({
    imports: [TocModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class TocRoutingModule {}
