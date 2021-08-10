/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as messagesComponents from './components';

/* Containers */
import * as messagesContainers from './containers';

/* Guards */
import * as messagesGuards from './guards';

/* Services */
import * as messagesServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...messagesServices.services, ...messagesGuards.guards],
    declarations: [...messagesContainers.containers, ...messagesComponents.components],
    exports: [...messagesContainers.containers, ...messagesComponents.components],
})
export class MessagesModule {}
