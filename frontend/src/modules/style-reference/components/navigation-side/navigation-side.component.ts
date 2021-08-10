import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-navigation-side',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './navigation-side.component.html',
    styleUrls: ['navigation-side.component.scss'],
})
export class NavigationSideComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    constructor() {}
    ngOnInit() {}
}

const pugCode = `
nav.sidenav.sidenav-light
    .sidenav-menu
        .nav
            .sidenav-menu-heading Heading
            a.nav-link(href='javascript:void(0);')
                .nav-link-icon
                    i-feather(name='feather')
                | Link
            a.nav-link(href='javascript:void(0);')
                .nav-link-icon
                    i-feather(name='feather')
                | Another Link
            a.nav-link.disabled(href='javascript:void(0);')
                .nav-link-icon
                    i-feather(name='feather')
                | Another Link
    .sidenav-footer
        | SB Sidenav Footer
`.trim();
