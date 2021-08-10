import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sbpro-wizard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './wizard.component.html',
    styleUrls: ['wizard.component.scss'],
})
export class WizardComponent implements OnInit {
    step: 'account' | 'billing' | 'preferences' | 'review' = 'account';
    constructor(private route: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) {}
    ngOnInit() {
        console.log(this.route.paramMap);

        this.route.queryParams.subscribe((params) => {
            if (params.step) {
                this.step = params.step;
                this.changeDetectorRef.detectChanges();
            }
        });
    }
}
