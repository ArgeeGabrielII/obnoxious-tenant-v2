import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }

    getTitleText() {
        return element(by.css('sbpro-dashboard-head')).getAttribute('title') as Promise<string>;
    }
}
