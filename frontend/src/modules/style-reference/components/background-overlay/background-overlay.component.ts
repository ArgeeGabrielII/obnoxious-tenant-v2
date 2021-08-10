import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CodeSample } from '@modules/style-reference/models';

@Component({
    selector: 'sbpro-background-overlay',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './background-overlay.component.html',
    styleUrls: ['background-overlay.component.scss'],
})
export class BackgroundOverlayComponent implements OnInit {
    codeSamples: CodeSample[] = [
        {
            language: 'pug',
            code: pugCode,
        },
    ];
    codeSamplesOpacity: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeOpacity,
        },
    ];
    codeSamplesColors: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeColors,
        },
    ];
    codeSamplesCombining: CodeSample[] = [
        {
            language: 'pug',
            code: pugCodeCombining,
        },
    ];
    constructor() {}
    ngOnInit() {}
}
const pugCode = `
.bg-img-cover.overlay(style='background-image: url("path/to/image")')
    div(style='height: 20rem;')
`.trim();

const pugCodeOpacity = `
//- 10% Overlay
.bg-img-cover.overlay.overlay-10(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- 20% Overlay
.bg-img-cover.overlay.overlay-20(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- 30% Overlay
.bg-img-cover.overlay.overlay-30(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- 40% Overlay
.bg-img-cover.overlay.overlay-40(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- 50% Overlay
.bg-img-cover.overlay.overlay-50(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- 60% Overlay
.bg-img-cover.overlay.overlay-60(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- 70% Overlay
.bg-img-cover.overlay.overlay-70(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- 80% Overlay
.bg-img-cover.overlay.overlay-80(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- 90% Overlay
.bg-img-cover.overlay.overlay-90(style='background-image: url("path/to/image")')
    .z-1
        | ...
`.trim();

const pugCodeColors = `
//- Primary Overlay
.bg-img-cover.overlay.overlay-primary(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- Secondary Overlay
.bg-img-cover.overlay.overlay-secondary(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- Success Overlay
.bg-img-cover.overlay.overlay-success(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- Info Overlay
.bg-img-cover.overlay.overlay-info(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- Warning Overlay
.bg-img-cover.overlay.overlay-warning(style='background-image: url("path/to/image")')
    .z-1
        | ...
//- Danger Overlay
.bg-img-cover.overlay.overlay-dagner(style='background-image: url("path/to/image")')
    .z-1
        | ...
`.trim();

const pugCodeCombining = `
.bg-img-cover.overlay.overlay-70.overlay-primary(
    style='background-image: url("path/to/image")'
)
    | ...
`.trim();
