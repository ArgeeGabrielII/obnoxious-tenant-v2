import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChildActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    template: `
        <sbpro-toast-view class="ngb-toasts" aria-live="polite" aria-atomic="true">
        </sbpro-toast-view
        ><router-outlet></router-outlet>
    `,
})
export class AppComponent {
    constructor(public router: Router, private titleService: Title) {
        this.router.events
            .pipe(filter((event) => event instanceof ChildActivationEnd))
            .subscribe((event) => {
                let snapshot = (event as ChildActivationEnd).snapshot;

                while (snapshot.firstChild !== null) {
                    snapshot = snapshot.firstChild;
                }
                this.titleService.setTitle(snapshot.data.title || 'SB Admin Pro Angular');
            });
    }
}
