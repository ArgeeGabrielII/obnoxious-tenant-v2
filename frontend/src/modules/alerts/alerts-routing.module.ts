/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AlertsModule } from './alerts.module';

/* Containers */
import * as alertsContainers from './containers';

/* Guards */
import * as alertsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: alertsContainers.AlertsComponent,
    // },
];

@NgModule({
    imports: [AlertsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AlertsRoutingModule {}
