import {browser} from "protractor";
import {View1Page} from "../model/View1Page";

describe('View1 page', function () {
    let view1 = new View1Page();

    beforeAll(() => {
        browser.get('/#!/view1');
    });

    it('should be having paragraph', function () {
        expect(view1.getParagraph().isPresent()).toBeTruthy();
    });

    it('paragraph should contain', function () {
        expect(view1.getParagraph().getText()).toContain('This is the partial for view 1.');
    });
});