/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as accountComponents from './components';

/* Containers */
import * as accountContainers from './containers';

/* Guards */
import * as accountGuards from './guards';

/* Services */
import * as accountServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...accountServices.services, ...accountGuards.guards],
    declarations: [...accountContainers.containers, ...accountComponents.components],
    exports: [...accountContainers.containers, ...accountComponents.components],
})
export class AccountModule {}
