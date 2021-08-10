/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as alertsComponents from './components';

/* Containers */
import * as alertsContainers from './containers';

/* Guards */
import * as alertsGuards from './guards';

/* Services */
import * as alertsServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...alertsServices.services, ...alertsGuards.guards],
    declarations: [...alertsContainers.containers, ...alertsComponents.components],
    exports: [...alertsContainers.containers, ...alertsComponents.components],
})
export class AlertsModule {}
