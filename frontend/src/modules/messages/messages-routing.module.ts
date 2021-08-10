/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { MessagesModule } from './messages.module';

/* Containers */
import * as messagesContainers from './containers';

/* Guards */
import * as messagesGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: messagesContainers.MessagesComponent,
    // },
];

@NgModule({
    imports: [MessagesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class MessagesRoutingModule {}
