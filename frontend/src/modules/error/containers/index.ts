import { Error400Component } from './error-400/error-400.component';
import { Error401Component } from './error-401/error-401.component';
import { Error403Component } from './error-403/error-403.component';
import { Error4041Component } from './error-404-1/error-404-1.component';
import { Error4042Component } from './error-404-2/error-404-2.component';
import { Error500Component } from './error-500/error-500.component';
import { Error503Component } from './error-503/error-503.component';
import { Error504Component } from './error-504/error-504.component';

export const containers = [
    Error401Component,
    Error500Component,
    Error400Component,
    Error403Component,
    Error4041Component,
    Error4042Component,
    Error503Component,
    Error504Component,
];

export * from './error-401/error-401.component';
export * from './error-500/error-500.component';
export * from './error-400/error-400.component';
export * from './error-403/error-403.component';
export * from './error-404-1/error-404-1.component';
export * from './error-404-2/error-404-2.component';
export * from './error-503/error-503.component';
export * from './error-504/error-504.component';
