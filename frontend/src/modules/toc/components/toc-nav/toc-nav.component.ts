import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TOCIndexItem, TOCItem } from '@modules/toc/models';
import { TocService } from '@modules/toc/services';
import { paramCase } from 'change-case';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sbpro-toc-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './toc-nav.component.html',
    styleUrls: ['toc-nav.component.scss'],
})
export class TocNavComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() tocIndex!: TOCIndexItem[];

    subscription: Subscription = new Subscription();
    items: TOCItem[] = [];
    inited = false;
    topInView!: string;
    topInViewChild!: string;
    currentFragment!: string;

    constructor(
        public changeDetectorRef: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router,
        private tocService: TocService
    ) {}

    _mapToIndex(item: TOCIndexItem): TOCItem {
        return {
            title: item.title,
            id: paramCase(item.title),
            inView: false,
            children: item.children ? item.children.map(this._mapToIndex) : undefined,
            new: item.new,
            updated: item.updated,
        };
    }
    ngOnInit() {
        this.items = this.tocIndex.map((item: TOCIndexItem) => this._mapToIndex(item));
        this.subscription.add(
            this.tocService.tocListener$.subscribe((event: TOCItem) => {
                const foundTitle = this.items.find((title) => title.title === event.title);
                let topInView: TOCItem | undefined;
                if (!foundTitle) {
                    // May be a child
                    this.items.forEach((item) => {
                        if (item.children) {
                            const foundChild = item.children.find(
                                (title) => title.title === event.title
                            );
                            if (!foundChild) {
                                return;
                            }
                            foundChild.inView = event.inView;
                            const topInViewChild = item.children.find((title) => title.inView);
                            if (!topInViewChild) {
                                return;
                            }
                            this.topInViewChild = topInViewChild.title;
                            this.changeDetectorRef.detectChanges();
                        }
                    });
                    return;
                }

                foundTitle.inView = event.inView;
                topInView = this.items.find((title) => title.inView);
                if (!topInView) {
                    return;
                }
                this.topInView = topInView.title;
                this.changeDetectorRef.detectChanges();
            })
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    navigateToTitle(item: TOCItem) {
        if (this.currentFragment === item.id) {
            return this._scrollToFragment(this.currentFragment);
        }
        this.router.navigate([], {
            relativeTo: this.route,
            fragment: item.id,
        });
    }

    ngAfterViewInit() {
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            // tslint:disable-next-line: no-non-null-assertion
            this._scrollToFragment(this.route.snapshot.fragment!);
        }, 500);
        this.route.fragment.subscribe((fragment) => {
            if (!fragment) {
                return;
            }
            this.currentFragment = fragment;
            this._scrollToFragment(fragment);
        });
    }

    _scrollToFragment(fragment: string) {
        const foundElement = document.getElementById(fragment);
        if (foundElement) {
            foundElement.scrollIntoView();
        }
    }
}
