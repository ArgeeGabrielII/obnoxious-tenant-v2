/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { StyleReferenceModule } from './style-reference.module';

/* Containers */
import * as styleReferenceContainers from './containers';

/* Guards */
import * as styleReferenceGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: styleReferenceContainers.StyleReferenceComponent,
    // },
];

@NgModule({
    imports: [StyleReferenceModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class StyleReferenceRoutingModule {}
