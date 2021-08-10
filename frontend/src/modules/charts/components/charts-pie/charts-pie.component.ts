import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { ChartsService } from '@modules/charts/services';

@Component({
    selector: 'sb-charts-pie',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-pie.component.html',
    styleUrls: ['charts-pie.component.scss'],
})
export class ChartsPieComponent implements OnInit, AfterViewInit {
    @ViewChild('myPieChart') myPieChart!: ElementRef<HTMLCanvasElement>;
    @Input() height!: string;
    @Input() width!: string;
    chart!: Chart;

    constructor(private chartsService: ChartsService) {}
    ngOnInit() {}

    ngAfterViewInit() {
        this.chart = new this.chartsService.Chart(this.myPieChart.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Direct', 'Referral', 'Social'],
                datasets: [
                    {
                        data: [55, 30, 15],
                        backgroundColor: [
                            'rgba(0, 97, 242, 1)',
                            'rgba(0, 172, 105, 1)',
                            'rgba(88, 0, 232, 1)',
                        ],
                        hoverBackgroundColor: [
                            'rgba(0, 97, 242, 0.9)',
                            'rgba(0, 172, 105, 0.9)',
                            'rgba(88, 0, 232, 0.9)',
                        ],
                        hoverBorderColor: 'rgba(234, 236, 244, 1)',
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: 'rgb(255,255,255)',
                    bodyFontColor: '#858796',
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false,
                },
                cutoutPercentage: 80,
            },
        });
    }
}
