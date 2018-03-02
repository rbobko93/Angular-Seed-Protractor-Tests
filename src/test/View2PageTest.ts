import {View2Page} from "../model/View2Page";
import {browser} from "protractor";

describe('View2Page ', () => {
   let view2 = new View2Page();

   beforeAll(() => {
      browser.get('/#!/view2');
   });

   it('should have 2 paragraphs', () => {
      expect(view2.getParagraphs().count()).toBe(2);
   });

    it('paragraph 1 should contain', () => {
        expect(view2.getParagraphs().get(0).getText()).toContain('view 2');
    });

    it('paragraph 2 should contain', () => {
       expect(view2.getParagraphs().get(1).getText()).toContain('filter');
    });
});