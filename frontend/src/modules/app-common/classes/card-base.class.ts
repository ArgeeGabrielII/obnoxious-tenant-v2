import { Directive, Input, OnInit } from '@angular/core';

@Directive()
export class CardBase implements OnInit {
    @Input() background!: string;
    @Input() color!: string;
    @Input() classes!: string[];

    cardClasses: string[] = [];

    constructor() {}

    ngOnInit() {
        if (this.background) {
            this.cardClasses.push(this.background);
        }
        if (this.color) {
            this.cardClasses.push(this.color);
        }
        if (this.classes) {
            this.cardClasses.push(...this.classes);
        }
    }
}
