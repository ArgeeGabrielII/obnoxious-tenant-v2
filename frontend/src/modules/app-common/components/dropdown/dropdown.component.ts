import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown, Placement } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sbpro-dropdown',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dropdown.component.html',
    styleUrls: ['dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
    @ViewChild('dropdown') dropdown!: NgbDropdown;
    @Input() dropdownStyle: 'icon' | 'text' = 'icon';
    @Input() background!: string;
    @Input() color!: string;
    @Input() placement: Placement = 'bottom-start';
    @Input() classes!: string[];
    @Input() animation!: 'animated--fade-in' | 'animated--fade-in-up';

    customClasses: string[] = [];
    dropdownButtonClasses: string[] = [];
    dropdownMenuClasses: string[] = [];

    constructor() {}
    ngOnInit() {
        if (this.dropdownStyle === 'icon') {
            this.dropdownButtonClasses.push(...['btn-icon', 'btn-transparent-dark']);
            this.customClasses.push('no-caret');
        }
        if (this.background) {
            this.dropdownButtonClasses.push(this.background);
        }
        if (this.color) {
            this.dropdownButtonClasses.push(this.color);
        }
        if (this.classes) {
            this.customClasses.push(...this.classes);
        }
        if (this.animation) {
            this.dropdownMenuClasses.push(this.animation);
        }
    }
    close() {
        this.dropdown.close();
    }
}
