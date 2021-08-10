/* tslint:disable: ordered-imports*/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';

/* Components */
import * as navigationComponents from './components';

/* Containers */
import * as navigationContainers from './containers';

/* Layouts */
import * as appCommonLayouts from './layouts';

/* Guards */
import * as navigationGuards from './guards';

/* Services */
import * as navigationServices from './services';
import { AlertsService } from '@modules/alerts/services';
import { MessagesService } from '@modules/messages/services';

@NgModule({
    imports: [CommonModule, RouterModule, AppCommonModule],
    declarations: [
        ...navigationContainers.containers,
        ...navigationComponents.components,
        ...appCommonLayouts.layouts,
    ],
    exports: [
        ...navigationContainers.containers,
        ...navigationComponents.components,
        ...appCommonLayouts.layouts,
    ],
    providers: [{ provide: 'window', useValue: window }],
})
export class NavigationModule {
    static forRoot(): ModuleWithProviders<NavigationModule> {
        return {
            ngModule: NavigationModule,
            providers: [
                ...navigationServices.services,
                ...navigationGuards.guards,
                AlertsService,
                MessagesService,
            ],
        };
    }
}
