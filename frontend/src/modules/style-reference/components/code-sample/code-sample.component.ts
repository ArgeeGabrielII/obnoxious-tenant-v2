import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { UtilityService } from '@common/services';
import { CodeSample } from '@modules/style-reference/models';
import { PrismService } from '@modules/style-reference/services';

@Component({
    selector: 'sbpro-code-sample',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './code-sample.component.html',
    styleUrls: ['code-sample.component.scss'],
})
export class CodeSampleComponent implements OnInit, AfterViewInit {
    @Input() codeSamples!: CodeSample[];

    selectedIndex = 0;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private prismService: PrismService,
        private utilityService: UtilityService
    ) {}

    ngOnInit() {}

    ngAfterViewInit() {
        this.prismService.highlightAll();
    }

    setSelectedIndex(index: number) {
        this.selectedIndex = index;
        this.changeDetectorRef.detectChanges();
        this.prismService.highlightAll();
    }

    copyToClipboard(index: number) {
        this.utilityService.copyToClipboard(this.codeSamples[index].code);
    }
}
