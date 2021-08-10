/* tslint:disable: ordered-imports*/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Modules */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '@modules/icons/icons.module';

const modules = [IconsModule, NgbModule];

/* Containers */
import * as appCommonContainers from './containers';

/* Components */
import * as appCommonComponents from './components';

/* Directives */
import * as appCommonDirectives from './directives';

/* Guards */
import * as appCommonGuards from './guards';

/* Services */
import * as appCommonServices from './services';
import * as authServices from '@modules/auth/services';

@NgModule({
    imports: [CommonModule, RouterModule, ...modules],
    declarations: [
        ...appCommonContainers.containers,
        ...appCommonComponents.components,
        ...appCommonDirectives.directives,
    ],
    exports: [
        ...appCommonContainers.containers,
        ...appCommonComponents.components,
        ...appCommonDirectives.directives,
        ...modules,
    ],
})
export class AppCommonModule {
    static forRoot(): ModuleWithProviders<AppCommonModule> {
        return {
            ngModule: AppCommonModule,
            providers: [
                ...appCommonServices.services,
                ...authServices.services,
                ...appCommonGuards.guards,
                { provide: 'window', useValue: window },
            ],
        };
    }
}
