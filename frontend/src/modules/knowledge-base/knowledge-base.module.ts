/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as knowledgeBaseComponents from './components';

/* Containers */
import * as knowledgeBaseContainers from './containers';

/* Guards */
import * as knowledgeBaseGuards from './guards';

/* Services */
import * as knowledgeBaseServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...knowledgeBaseServices.services, ...knowledgeBaseGuards.guards],
    declarations: [...knowledgeBaseContainers.containers, ...knowledgeBaseComponents.components],
    exports: [...knowledgeBaseContainers.containers, ...knowledgeBaseComponents.components],
})
export class KnowledgeBaseModule {}
