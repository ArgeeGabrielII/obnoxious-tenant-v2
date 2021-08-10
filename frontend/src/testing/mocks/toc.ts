import { TOCIndexItem, TOCItem } from '@modules/toc/models';
import { paramCase } from 'change-case';

export class TOCIndexItemMock implements TOCIndexItem {
    title!: string;
    children = [new TOCIndexItemChildMock('234'), new TOCIndexItemChildMock('345')];
    constructor(title: string) {
        this.title = title;
    }
}

export class TOCIndexItemInViewMock implements TOCIndexItem {
    title!: string;
    children = [new TOCIndexItemChildMock('234', true), new TOCIndexItemChildMock('345')];
    constructor(title: string) {
        this.title = title;
    }
}

export class TOCIndexItemChildMock implements TOCIndexItem {
    title!: string;
    inView: boolean;
    constructor(title: string, inView = false) {
        this.title = title;
        this.inView = inView;
    }
}

export class TOCItemMock implements TOCItem {
    title!: string;
    id!: string;
    inView!: boolean;
    constructor(title: string, inView = false) {
        this.title = title;
        this.id = paramCase(title);
        this.inView = inView;
    }
}
