import {describe} from "selenium-webdriver/testing";
import {Navbar} from "../model/Navbar";
import {browser} from "protractor";

describe('Navbar', () => {
    let navbar = new Navbar();

    beforeAll(() => {
        browser.get('/');
    });

    it('should have view1 link', () => {
        expect(navbar.getView1().isPresent()).toBeTruthy();
    });

    it('should have view2 link', () => {
        expect(navbar.getView2().isPresent()).toBeTruthy();
    });

    it('should navigate to view1', () => {
        navbar.clickView1();
        expect(browser.getCurrentUrl()).toContain('view1');
    });

    it('should navigate to view2', () => {
        navbar.clickView2();
        expect(browser.getCurrentUrl()).toContain('view2');
    });
});