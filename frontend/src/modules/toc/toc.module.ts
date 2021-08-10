/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as tocComponents from './components';

/* Containers */
import * as tocContainers from './containers';

/* Directives */
import * as tocDirectives from './directives';

/* Guards */
import * as tocGuards from './guards';

/* Services */
import * as tocServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...tocServices.services, ...tocGuards.guards, tocDirectives.directives],
    declarations: [
        ...tocContainers.containers,
        ...tocComponents.components,
        tocDirectives.directives,
    ],
    exports: [...tocContainers.containers, ...tocComponents.components, tocDirectives.directives],
})
export class TocModule {}
