import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { barChartData } from '@modules/charts/data/bar-chart.data';
import { ChartsService } from '@modules/charts/services';

@Component({
    selector: 'sb-charts-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './charts-bar.component.html',
    styleUrls: ['charts-bar.component.scss'],
})
export class ChartsBarComponent implements OnInit, AfterViewInit, OnChanges {
    @ViewChild('myBarChart') myBarChart!: ElementRef<HTMLCanvasElement>;
    @Input() duration: 'monthly' | 'quarterly' | 'yearly' = 'yearly';
    @Input() height!: string;
    @Input() width!: string;
    chart!: Chart;

    constructor(
        private chartsService: ChartsService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}
    ngOnInit() {}

    ngAfterViewInit() {
        this._renderChart();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.duration?.firstChange) {
            return;
        }
        if (this.chart) {
            this.chart.destroy();
            this._renderChart();
            this.changeDetectorRef.detectChanges();
        }
    }

    _renderChart() {
        this.chart = new this.chartsService.Chart(this.myBarChart.nativeElement, {
            type: 'bar',
            data: barChartData[this.duration],
            options: {
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 10,
                        right: 25,
                        top: 25,
                        bottom: 0,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            time: {
                                unit: 'month',
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                maxTicksLimit: 6,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                // max: 15000,
                                maxTicksLimit: 5,
                                padding: 10,
                                // Include a dollar sign in the ticks
                                callback: (value, index, values) => {
                                    return value.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        minimumFractionDigits: 0,
                                    });
                                },
                            },
                            gridLines: {
                                color: 'rgb(234, 236, 244)',
                                zeroLineColor: 'rgb(234, 236, 244)',
                                drawBorder: false,
                                borderDash: [2],
                                zeroLineBorderDash: [2],
                            },
                        },
                    ],
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    titleMarginBottom: 10,
                    titleFontColor: '#6e707e',
                    titleFontSize: 14,
                    backgroundColor: 'rgb(255,255,255)',
                    bodyFontColor: '#858796',
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                    callbacks: {
                        label: (tooltipItem, chart) => {
                            let datasetLabel = '';
                            if (chart && chart.datasets) {
                                datasetLabel = chart.datasets[tooltipItem.datasetIndex as number]
                                    .label as string;
                            }
                            return (
                                datasetLabel +
                                ': ' +
                                (tooltipItem.yLabel as number).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                })
                            );
                        },
                    },
                },
            },
        });
    }
}
