/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { KnowledgeBaseModule } from './knowledge-base.module';

/* Containers */
import * as knowledgeBaseContainers from './containers';

/* Guards */
import * as knowledgeBaseGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: knowledgeBaseContainers.KnowledgeBaseComponent,
    // },
];

@NgModule({
    imports: [KnowledgeBaseModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class KnowledgeBaseRoutingModule {}
