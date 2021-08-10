/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { TocModule } from '@modules/toc/toc.module';

/* Components */
import * as styleReferenceComponents from './components';

/* Containers */
import * as styleReferenceContainers from './containers';

/* Guards */
import * as styleReferenceGuards from './guards';

/* Services */
import * as styleReferenceServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        TocModule,
    ],
    providers: [...styleReferenceServices.services, ...styleReferenceGuards.guards],
    declarations: [...styleReferenceContainers.containers, ...styleReferenceComponents.components],
    exports: [...styleReferenceContainers.containers, ...styleReferenceComponents.components],
})
export class StyleReferenceModule {}
