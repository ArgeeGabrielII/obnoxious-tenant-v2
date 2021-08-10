import { TestBed, waitForAsync } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, ChildActivationEnd, Event, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { Subject } from 'rxjs';

import { AppComponent } from './app.component';

export interface MockRouter {
    events: Subject<Event>;
}

describe('AppComponent', () => {
    let router: MockRouter;
    let titleService: Title;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    AppCommonModule.forRoot(),
                    NavigationModule.forRoot(),
                ],
                providers: [
                    {
                        provide: Router,
                        useValue: {
                            events: new Subject<Event>(),
                        },
                    },
                    Title,
                ],
                declarations: [AppComponent],
            }).compileComponents();

            router = (TestBed.inject(Router) as unknown) as MockRouter;
            titleService = TestBed.inject(Title);
        })
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should set the default title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(titleService, 'setTitle');
        router.events.next(
            new ChildActivationEnd(({
                firstChild: {
                    firstChild: null,
                    data: {},
                },
            } as unknown) as ActivatedRouteSnapshot)
        );
        expect(titleService.setTitle).toHaveBeenCalledTimes(1);
    });

    it('should set the title from data', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(titleService, 'setTitle');
        router.events.next(
            new ChildActivationEnd(({
                firstChild: null,
                data: {
                    title: 'TEST',
                },
            } as unknown) as ActivatedRouteSnapshot)
        );
        expect(titleService.setTitle).toHaveBeenCalledWith('TEST');
    });
});
