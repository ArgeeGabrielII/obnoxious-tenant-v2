import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-cards-navigation',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './cards-navigation.component.html',
    styleUrls: ['cards-navigation.component.scss'],
})
export class CardsNavigationComponent implements OnInit {
    codeSamplesTabs: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeTabs,
        },
    ];
    codeSamplesPills: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeFontPills,
        },
    ];
    codeSamplesPillsVertical: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodePillsVertical,
        },
    ];

    constructor() {}
    ngOnInit() {}
}

const pugCodeTabs = `
sbpro-card-navigation(
    sbproTocItem='Tabs',
    [navNames]='["Overview", "Example"]',
    [templates]='[overviewTabbed, exampleTabbed]'
)
    ng-template(#overviewTabbed)
        h5.card-title Tabbed Navigation Card
        p.card-text.
            The is a custom tab navigation component.
    ng-template(#exampleTabbed)
        h5.card-title Example Pane
        p.card-text.
            This is an example of another tab pane that you could use within a card with
            navigation in the header.
`.trim();

const pugCodeFontPills = `
sbpro-card-navigation(
    sbproTocItem='Pills',
    [navNames]='["Overview", "Example"]',
    [templates]='[overviewPill, examplePill]',
    navType='pill'
)
    ng-template(#overviewPill)
        h5.card-title Pill Navigation Card
        p.card-text.
            The is a custom pill navigation component.
    ng-template(#examplePill)
        h5.card-title Example Pane
        p.card-text.
            This is an example of another tab pane that you could use within a card with
            navigation in the header.
`.trim();

const pugCodePillsVertical = `
sbpro-card-navigation(
    sbproTocItem='Pills (Vertical)',
    [navNames]='["Overview", "Example"]',
    [templates]='[overviewVerticalPill, exampleVerticalPill]',
    navType='vertical'
)
    .card-header Vertical Pill Navigation

    ng-template(#overviewVerticalPill)
        h5.card-title Vertical Pill Navigation Card
        p.card-text.
            The is a custom vertical pill navigation component.
    ng-template(#exampleVerticalPill)
        h5.card-title Example Pane
        p.card-text.
            This is an example of another tab pane that you could use within a card with
            navigation in the header.
`.trim();
