import {by, element} from "protractor";

export class View2Page {
    private paragraphs = element.all(by.tagName('p'));

    public getParagraphs() {
        return this.paragraphs;
    }
}