import { Injectable } from '@angular/core';
import { Alert } from '@modules/alerts/models';
import { Observable, of } from 'rxjs';

const alerts: Alert[] = [
    {
        icon: 'activity',
        date: 'December 29, 2019',
        text: `This is an alert message. It's nothing serious, but it requires your attention.`,
    },
    {
        icon: 'bar-chart',
        date: 'December 22, 2019',
        text: `A new monthly report is ready. Click here to view!`,
    },
    {
        icon: 'alert-triangle',
        date: 'December 8, 2019',
        text: `Critical system failure, systems shutting down.`,
    },
    {
        icon: 'user-plus',
        date: 'December 2, 2019',
        text: `New user request. Woody has requested access to the organization.`,
    },
];

@Injectable()
export class AlertsService {
    constructor() {}

    get alerts$(): Observable<Alert[]> {
        return of(alerts);
    }
}
