import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { CardBase } from '@common/classes';

@Component({
    selector: 'sbpro-card-collapsable',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './card-collapsable.component.html',
    styleUrls: ['card-collapsable.component.scss'],
})
export class CardCollapsableComponent extends CardBase implements OnInit, AfterViewInit {
    @ViewChild('collapsibleSection') collapsibleSection!: ElementRef<HTMLDivElement>;

    @Input() headerText = '';
    collapsed = false;
    divElement!: HTMLDivElement;
    constructor(public changeDetectorRef: ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngAfterViewInit() {
        this.divElement = this.collapsibleSection.nativeElement;
        this.divElement.addEventListener('transitionend', (event) => {
            if (!this.collapsed) {
                this.divElement.style.height = '';
            }
        });
    }

    toggle() {
        if (this.collapsed) {
            return this.expand();
        }
        return this.collapse();
    }

    collapse() {
        const navHeight = this.divElement.scrollHeight;
        const elementTransition = this.divElement.style.transition;
        this.divElement.style.transition = '';
        requestAnimationFrame(() => {
            this.divElement.style.height = navHeight + 'px';
            this.divElement.style.transition = elementTransition;
            requestAnimationFrame(() => {
                this.divElement.style.height = 0 + 'px';
                this.collapsed = true;
                this.changeDetectorRef.markForCheck();
            });
        });
    }

    expand() {
        this.divElement.style.height = this.divElement.scrollHeight + 'px';
        this.collapsed = false;
    }
}
