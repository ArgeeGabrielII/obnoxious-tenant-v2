import {
    AfterViewInit,
    ChangeDetectorRef,
    Directive,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { SBProTocItemDirective } from '@modules/toc/directives';

@Directive()
export class Scrollable implements AfterViewInit {
    @ViewChildren(SBProTocItemDirective) sbproTocItems!: QueryList<SBProTocItemDirective>;

    changeDetectorRef: ChangeDetectorRef;

    constructor(changeDetectorRef: ChangeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
    }

    ngAfterViewInit() {
        this.changeDetectorRef.detectChanges();
    }
}
