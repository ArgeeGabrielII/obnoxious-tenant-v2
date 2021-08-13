import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { TablesModule } from '@modules/tables/tables.module';

import * as accountComponents from './components';
import * as accountContainers from './containers';
import * as accountGuards from './guards';
import * as accountServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        TablesModule,
    ],
    providers: [...accountServices.services, ...accountGuards.guards],
    declarations: [...accountContainers.containers, ...accountComponents.components],
    exports: [...accountContainers.containers, ...accountComponents.components],
})
export class AccountModule {}
