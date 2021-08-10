import { Injectable } from '@angular/core';
import Chart from 'chart.js';

@Injectable()
export class ChartsService {
    constructor() {
        Chart.defaults.global.defaultFontFamily =
            'Metropolis,-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = '#858796';
    }

    get Chart() {
        return Chart;
    }
}
