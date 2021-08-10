/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as shopComponents from './components';

/* Containers */
import * as shopContainers from './containers';

/* Guards */
import * as shopGuards from './guards';

/* Services */
import * as shopServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...shopServices.services, ...shopGuards.guards],
    declarations: [...shopContainers.containers, ...shopComponents.components],
    exports: [...shopContainers.containers, ...shopComponents.components],
})
export class ShopModule {}
